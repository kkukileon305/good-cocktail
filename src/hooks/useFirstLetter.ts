import { useQuery } from '@tanstack/react-query';

const useFirstLetter = (letter: string) =>
  useQuery({
    queryFn: () => fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`).then(res => res.json()),
    queryKey: ['cocktails', `first letter ${letter}`],
  });

export default useFirstLetter;
