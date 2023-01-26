import { useParams } from 'react-router-dom';
import DrinkItem from '../components/items/DrinkItem';
import DrinkItemSkeleton from '../components/items/DrinkItem.skeleton';
import useCategory from '../hooks/useCategory';

const Category = () => {
  const { strCategory } = useParams();
  const { data: response, isLoading } = useCategory(strCategory || 'Cocktail');

  return (
    <div>
      <h2>{strCategory}</h2>

      {isLoading ? (
        <ul className='flex flex-wrap gap-4 justify-between'>
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
        <ul className='flex flex-wrap gap-4 justify-between'>
          {response?.drinks.map(drink => (
            <DrinkItem key={drink.idDrink} drink={drink} />
          ))}
        </ul>
      )}
    </div>
  );
};
export default Category;