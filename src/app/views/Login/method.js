import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const useMethod = () => {
  const navigation = useNavigation();
  const [login, setLogin] = useState({ email: '', password: '' });

  const handleChange = (value, fieldName) => {
    setLogin((prev) => {
      return { ...prev, [fieldName]: value };
    });
  };

  const handleLogIn = () => {
    navigation.navigate('BottomTabNavigator');
  };

  return {
    login,
    handleLogIn,
    handleChange,
    navigation,
  };
};

export default useMethod;
