import { ChangeEventHandler, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate, useSearchParams } from 'react-router-dom';
import DrinkItem from '../components/items/DrinkItem';
import DrinkItemSkeleton from '../components/skeletons/DrinkItem.skeleton';
import useSearch from '../hooks/queries/useSearch';

const Search = () => {
  const [searchParam] = useSearchParams();
  const navigate = useNavigate();
  const debounce = useRef<NodeJS.Timeout>();
  const { data: response, isLoading } = useSearch(searchParam.get('q') || '');

  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    clearTimeout(debounce.current);

    debounce.current = setTimeout(() => navigate(`/search?q=${e.target.value}`), 1000);
  };

  return (
    <div>
      <h2 className='font-bold text-2xl text-center'>Search By Name</h2>

      <div className='p-2 my-4 border flex items-center rounded-xl border-red-400'>
        <input type='text' className='block w-full bg-transparent' placeholder='Search...' onChange={onChange} />
        <BsSearch size={24} color='red' />
      </div>

      {searchParam.get('q') && (
        <>
          {isLoading ? (
            <ul className='flex flex-wrap gap-4 justify-center'>
              <DrinkItemSkeleton />
              <DrinkItemSkeleton />
              <DrinkItemSkeleton />
              <DrinkItemSkeleton />
              <DrinkItemSkeleton />
              <DrinkItemSkeleton />
              <DrinkItemSkeleton />
              <DrinkItemSkeleton />
            </ul>
          ) : (
            <>
              {!response?.drinks && <h2 className='font-bold text-2xl text-center'>No search found...</h2>}

              <ul className='flex flex-wrap gap-4 justify-center'>
                {response?.drinks?.map(drink => (
                  <DrinkItem key={drink.idDrink} drink={drink} />
                ))}
              </ul>
            </>
          )}
        </>
      )}

      {!response && <h2 className='text-center font-bold text-2xl'>Search what you want!</h2>}
    </div>
  );
};
export default Search;
