import { useQuery } from '@tanstack/react-query';
import { SearchResponse } from '../../types/response';

const useFirstLetter = (letter: string) =>
  useQuery<SearchResponse>({
    queryFn: () => fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`).then(res => res.json()),
    queryKey: ['cocktails', `first letter ${letter}`],
  });

export default useFirstLetter;
