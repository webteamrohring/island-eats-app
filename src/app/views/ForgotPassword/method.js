import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const useMethod = () => {
  const navigation = useNavigation();
  const [login, setLogin] = useState({ email: '', password: '' });
  const [resetPassword, setResetPassword] = useState({ new: '', confirm: '' });

  const handleChange = (value, fieldName) => {
    setLogin(prev => {
      return { ...prev, [fieldName]: value };
    });
  };
  const handleChangePassword = (value, fieldName) => {
    setResetPassword(prev => {
      return { ...prev, [fieldName]: value };
    });
  };

  const handleSendLink = () => {
    navigation.navigate('LinkSent');
  };

  const comparePasswords = () => {
    if (resetPassword.new === resetPassword.confirm) {
      return true;
    }
    return false;
  };

  return {
    login,
    resetPassword,
    handleSendLink,
    handleChange,
    handleChangePassword,
    comparePasswords,
    navigation,
  };
};

export default useMethod;
