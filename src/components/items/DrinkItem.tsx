import { Link } from 'react-router-dom';
import { Drink, ShortDrink } from '../../types/response';

const DrinkItem = ({ drink }: { drink: Drink | ShortDrink }) => {
  return (
    <li className='border rounded w-1/5 min-w-[200px]'>
      <Link to={`/detail/${drink.idDrink}`} className='p-2 block'>
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
        <p className='text-center my-2 font-bold'>{drink.strDrink}</p>
      </Link>
    </li>
  );
};
export default DrinkItem;
