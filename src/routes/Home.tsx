import { useState } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import DrinkItem from '../components/items/DrinkItem';
import DrinkItemSkeleton from '../components/skeletons/DrinkItem.skeleton';
import useFirstLetter from '../hooks/queries/useFirstLetter';
import alphabets from '../lib/alphabets';

const Home = () => {
  const [searchParams] = useSearchParams();
  const { data: response, isLoading } = useFirstLetter(searchParams.get('f') || 'A');

  return (
    <div>
      <h2 className='font-bold text-xl text-center'>Search By First Letter, {searchParams.get('f') || 'A'}</h2>
      <ul className='my-8 flex justify-center gap-4 flex-wrap'>
        {alphabets.map(alphabet => (
          <li key={alphabet}>
            <Link
              to={`/?f=${alphabet}`}
              className={`w-[24px] h-[24px] font-bold border border-slate-400 flex justify-center items-center rounded-full ${(searchParams.get('f') || 'A') === alphabet ? 'bg-transparent text-slate-400' : 'bg-slate-400 text-white'}`}
            >
              {alphabet}
            </Link>
          </li>
        ))}
      </ul>

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
        <ul className='flex flex-wrap gap-4 justify-center'>
          {response?.drinks?.map(drink => (
            <DrinkItem key={drink.idDrink} drink={drink} />
          ))}
        </ul>
      )}

      {!response?.drinks && <h2 className='font-bold text-center'>There is No Search Result...</h2>}
    </div>
  );
};

export default Home;
