import { useQuery } from '@tanstack/react-query';
import { SearchResponse } from '../../types/response';

const useRandom = () =>
  useQuery<SearchResponse>({
    queryFn: () => fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php').then(r => r.json()),
    queryKey: ['cocktails', 'random'],
    staleTime: 0,
    refetchOnWindowFocus: false,
  });

export default useRandom;
