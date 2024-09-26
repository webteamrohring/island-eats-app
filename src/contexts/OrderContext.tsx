import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  OrderContextType,
  OrderStatsResponse,
  OrderStatsType,
  OrderStatus,
} from '@interfaces';
import AppContext from '@contexts/AppContext.tsx';
import api from 'src/api';
import {
  CategoryType,
  OrderSubstituteType,
  OrderType,
} from '@components/ListItems/interfaces';
const OrderContext = createContext<OrderContextType>({
  orderStats: {
    orderPlaced: 0,
    preparing: 0,
    onDelivery: 0,
    delivered: 0,
  },
  categories: [],
  orderId: '',
});

export const OrderProvider: FC<{children: ReactNode}> = ({children}) => {
  const {user, showAlert, setLoading} = useContext(AppContext);

  const [categories, setCategories] = useState<CategoryType[]>([]);

  const [orderStats, setOrderStats] = useState<OrderStatsType>({
    orderPlaced: 0,
    preparing: 0,
    onDelivery: 0,
    delivered: 0,
  });

  const [orderId, setOrderId] = useState<string>('');

  useEffect(() => {
    if (user) {
      getOrderStats().then(() => {});

      getCategories().then((categoriesData: CategoryType[]) => {
        setCategories(categoriesData);
      });
    }
  }, [user]);

  const getOrderStats = async () => {
    return await api
      .get('orders/stats')
      .json<OrderStatsResponse>()
      .then(({stats}) => {
        setOrderStats(stats);
        return stats;
      })
      .catch(async error => {
        const response = await error.response.json();
        console.log(response.error);

        return {
          orderPlaced: 0,
          preparing: 0,
          onDelivery: 0,
          delivered: 0,
        };
      });
  };

  const getOrders = async (
    page = 1,
    limit = 5,
    date: string | undefined,
    orderStatus:
      | OrderStatus[]
      | OrderStatus
      | undefined = OrderStatus.ORDER_PLACED,
    search: string | undefined,
  ): Promise<OrderType[] | null> => {
    let url = `orders?page=${page}&limit=${limit}`;

    if (date) {
      url += `&date=${date}`;
    }

    if (orderStatus) {
      if (Array.isArray(orderStatus)) {
        orderStatus.forEach(status => {
          url += `&orderStatus=${status}`;
        });
      } else {
        url += `&orderStatus=${orderStatus}`;
      }
    }

    if (search) {
      url += `&search=${search}`;
    }

    return await api.get(url).json();
  };

  const getOrder = async (id: string): Promise<OrderType | null> => {
    setOrderId(id);
    return await api
      .get(`orders/${id}`)
      .json()
      .then(({order}: any) => {
        return order;
      })
      .catch(async error => {
        const response = await error.response.json();
        console.log(response.error);

        return null;
      });
  };

  const getCategories = async () => {
    return await api
      .get('categories')
      .json()
      .then(({data}: any) => {
        return data;
      })
      .catch(async error => {
        const response = await error.response.json();
        console.log(response.error);

        return [];
      });
  };

  const updateOrder = async (id: string | undefined, payload: object) => {
    return await api
      .put(`orders/${id}`, {
        json: payload,
      })
      .json()
      .then(data => {
        setLoading(false);
        return data;
      })
      .catch(async error => {
        setLoading(false);
        const response = await error.response.json();
        if (response.error) {
          showAlert(response.errorTitle, response.error);
        }

        return null;
      });
  };

  const getOrderSubstitutes = async (
    id: string,
  ): Promise<OrderSubstituteType | null> => {
    return await api
      .get(`orders/${id}/substitutes`)
      .json()
      .then(({orderSubstitutes}: any) => {
        return orderSubstitutes;
      })
      .catch(async error => {
        const response = await error.response.json();
        console.log(response.error);

        return null;
      });
  };

  return (
    <OrderContext.Provider
      value={{
        orderStats,
        getOrderStats,
        getOrders,
        getOrder,
        getOrderSubstitutes,
        categories,
        updateOrder,
        orderId,
      }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
