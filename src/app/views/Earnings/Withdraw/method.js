import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const useMethod = () => {
  const navigator = useNavigation();
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (id) => {
    setSelectedId(id);
  };
  return {
    navigator,
    selectedId,
    handleSelect,
  };
};

export default useMethod;
