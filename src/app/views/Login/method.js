import { useState } from 'react';

const useMethod = () => {
  const [login, setLogin] = useState({ email: '', password: '' });
  console.log('🚀 ~ useMethod ~ login:', login);

  const handleChange = (value, fieldName) => {
    setLogin(prev => {
      return { ...prev, [fieldName]: value };
    });
  };

  return {
    login,
    handleChange,
  };
};

export default useMethod;
