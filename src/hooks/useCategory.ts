import { useQuery } from '@tanstack/react-query';
import { FilterResponse } from '../types/response';

const useCategory = (category: string) =>
  useQuery<FilterResponse>({
    queryFn: () => fetch(`http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`).then(r => r.json()),
    queryKey: ['cocktails', `category ${category}`],
  });

export default useCategory;
