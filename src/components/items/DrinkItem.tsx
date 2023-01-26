import { Drink } from '../../types/response';

const DrinkItem = ({ drink }: { drink: Drink }) => {
  return (
    <li className='border p-2 rounded w-1/5 min-w-[200px]'>
      <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      <p className='text-center my-2 font-bold'>{drink.strDrink}</p>
    </li>
  );
};
export default DrinkItem;
