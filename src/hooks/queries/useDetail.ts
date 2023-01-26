import { useQuery } from '@tanstack/react-query';
import { SearchResponse } from '../../types/response';

const useDetail = (idDrink: string) =>
  useQuery<SearchResponse>({
    queryFn: () => fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`).then(res => res.json()),
    queryKey: ['cocktails', `detail ${idDrink}`],
  });

export default useDetail;
