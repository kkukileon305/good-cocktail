import { useState } from 'react';
import DrinkItem from '../components/items/DrinkItem';
import DrinkItemSkeleton from '../components/skeletons/DrinkItem.skeleton';
import useFirstLetter from '../hooks/queries/useFirstLetter';
import alphabets from '../lib/alphabets';

const Home = () => {
  const [firstLetter, setFirstLetter] = useState(alphabets[0]);
  const { data: response, isLoading } = useFirstLetter(firstLetter);

  return (
    <div>
      <h2 className='font-bold text-xl text-center'>Search By First Letter, {firstLetter}</h2>
      <ul className='my-8 flex justify-center gap-4 flex-wrap'>
        {alphabets.map(alphabet => (
          <li key={alphabet} onClick={() => setFirstLetter(alphabet)}>
            <button className={`w-[24px] h-[24px] font-bold border border-slate-400 flex justify-center items-center rounded-full ${firstLetter === alphabet ? 'bg-transparent text-slate-400' : 'bg-slate-400 text-white'}`}>{alphabet}</button>
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
