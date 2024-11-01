import { useNavigation } from '@react-navigation/native';

const useMethod = () => {
  const navigator = useNavigation();
  return { navigator };
};

export default useMethod;
