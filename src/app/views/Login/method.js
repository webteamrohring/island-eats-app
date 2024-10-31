import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useIsland} from '@context/Provider';

const useMethod = () => {
  const navigation = useNavigation();
  // const {themeState} = useIsland();
  const [login, setLogin] = useState({email: '', password: ''});
  console.log('🚀 ~ useMethod ~ login:', login);

  const handleChange = (value, fieldName) => {
    setLogin(prev => {
      return {...prev, [fieldName]: value};
    });
  };

  const handleLogIn = () => {
    navigation.navigate('BottomTabNavigator');
  };

  return {
    login,
    handleLogIn,
    handleChange,
  };
};

export default useMethod;
