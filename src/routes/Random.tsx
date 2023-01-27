import { BsArrowLeftShort } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Category from '../components/buttons/CategoryBtn';
import DetailSkeleton from '../components/skeletons/Detail.skeleton';
import useRandom from '../hooks/queries/useRandom';

const Random = () => {
  const navigate = useNavigate();
  const { data: response, isFetching } = useRandom();

  if (!response || !response.drinks || isFetching) return <DetailSkeleton />;

  return (
    <div className='flex flex-col sm:flex-row sm:gap-4 justify-between'>
      <div className='sm:w-[calc(100%-216px)]'>
        <button className='border rounded-full border-black dark:border-white mb-4' onClick={() => navigate(-1)}>
          <BsArrowLeftShort size={32} />
        </button>
        <div className='flex flex-wrap gap-4 items-end'>
          <h2 className='font-bold text-3xl'>{response.drinks[0].strDrink}</h2>
          <Category category={response.drinks[0].strCategory} />
        </div>
        <p className='mt-4'>{response.drinks[0].strInstructions}</p>
      </div>
      <img src={response?.drinks[0].strDrinkThumb} alt='' className='w-[200px] mx-auto text-center' />
    </div>
  );
};
export default Random;
