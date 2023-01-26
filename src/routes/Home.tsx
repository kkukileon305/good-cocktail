import { useState } from 'react';
import DrinkItem from '../components/items/DrinkItem';
import useFirstLetter from '../hooks/useFirstLetter';
import alphabets from '../lib/alphabets';

const Home = () => {
  const [firstLetter, setFirstLetter] = useState(alphabets[0]);
  const { data: response, isLoading } = useFirstLetter(firstLetter);

  return (
    <div>
      <h2 className='text-center font-bold text-xl'>Search By First Letter!</h2>
      <ul className='my-4 flex justify-center gap-4 flex-wrap'>
        {alphabets.map(alphabet => (
          <li key={alphabet} onClick={() => setFirstLetter(alphabet)}>
            <button className='px-2 py-1 rounded-full bg-slate-400'>{alphabet}</button>
          </li>
        ))}
      </ul>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className='flex flex-wrap gap-4 justify-center'>
          {response?.drinks.map(drink => (
            <DrinkItem key={drink.idDrink} drink={drink} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
