import DrinkItem from '../components/items/DrinkItem';
import { useAppSelector } from '../store/hooks';

const Likes = () => {
  const cart = useAppSelector(store => store.cart);

  return (
    <div>
      <h2 className='font-bold text-center text-2xl mb-8'>Likes</h2>
      <ul className='flex justify-center gap-4 flex-wrap'>
        {cart.map(drink => (
          <DrinkItem key={drink.idDrink} drink={drink} />
        ))}
      </ul>
    </div>
  );
};
export default Likes;
