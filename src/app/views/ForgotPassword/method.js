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

  return {
    login,
    resetPassword,
    handleSendLink,
    handleChange,
    handleChangePassword,
    navigation,
  };
};

export default useMethod;
