import { BsHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { Drink, ShortDrink } from '../../types/response';

const DrinkItem = ({ drink }: { drink: Drink | ShortDrink }) => {
  const cart = useAppSelector(store => store.cart);

  return (
    <li className='border rounded w-1/5 min-w-[200px]'>
      <Link to={`/detail/${drink.idDrink}`} className='p-2 block'>
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
        <div className='flex justify-center items-center gap-2'>
          <p className='text-center my-2 font-bold'>{drink.strDrink}</p>
          {cart.find(item => item.idDrink === drink.idDrink) && <BsHeartFill color='red' />}
        </div>
      </Link>
    </li>
  );
};
export default DrinkItem;
