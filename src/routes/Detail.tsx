import { useParams } from 'react-router-dom';
import Category from '../components/buttons/CategoryBtn';
import useDetail from '../hooks/useDetail';

const Detail = () => {
  const { idDrink } = useParams();
  const { data: response, isLoading } = useDetail(idDrink || '12345');

  if (!response || isLoading) return <div>Skeleton...</div>;

  return (
    <div className='flex gap-4 justify-between'>
      <div className='w-[calc(100%-216px)]'>
        <div className='flex gap-4 items-end'>
          <h2 className='font-bold text-3xl'>{response.drinks[0].strDrink}</h2>
          <Category category={response.drinks[0].strCategory} />
        </div>
        <p className='mt-4'>{response.drinks[0].strInstructions}</p>
      </div>
      <img src={response?.drinks[0].strDrinkThumb} alt='' className='w-[200px]' />
    </div>
  );
};
export default Detail;
