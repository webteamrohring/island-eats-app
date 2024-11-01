import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { isValidEmail } from '@utils/helpers';

const useMethod = () => {
  const navigation = useNavigation();
  const [login, setLogin] = useState({ email: '', password: '' });

  const handleChange = (value, fieldName) => {
    setLogin(prev => {
      return { ...prev, [fieldName]: value };
    });
  };

  const handleLogIn = () => {
    navigation.navigate('BottomTabNavigator');
  };

  const isButtonDisabled = (button) => {
    if (button === 'login') {
      if (isValidEmail(login.email) && login.password.length > 0) {
        return false;
      } else {
        return true;
      }
    }
  };

  return {
    login,
    handleLogIn,
    handleChange,
    isButtonDisabled,
    navigation,
  };
};

export default useMethod;
