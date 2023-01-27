import { useQuery } from '@tanstack/react-query';
import { SearchResponse } from '../../types/response';

const useSearch = (keyword: string) =>
  useQuery<SearchResponse>({
    enabled: !!keyword,
    queryFn: () => fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`).then(res => res.json()),
    queryKey: ['cocktails', `keyword ${keyword}`],
  });

export default useSearch;
