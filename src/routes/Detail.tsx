import { BsArrowLeftShort } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
import CategoryBtn from '../components/buttons/CategoryBtn';
import DetailSkeleton from '../components/skeletons/Detail.skeleton';
import useDetail from '../hooks/queries/useDetail';

const Detail = () => {
  const navigate = useNavigate();
  const { idDrink } = useParams();
  const { data: response, isLoading } = useDetail(idDrink || '12345');

  if (!response || isLoading) return <DetailSkeleton />;

  if (!response.drinks) return <div>No</div>;

  return (
    <div className='flex gap-4 justify-between'>
      <div className='w-[calc(100%-216px)]'>
        <button className='border rounded-full border-black dark:border-white mb-4' onClick={() => navigate(-1)}>
          <BsArrowLeftShort size={32} />
        </button>
        <div className='flex gap-4 items-end'>
          <h2 className='font-bold text-3xl'>{response.drinks[0].strDrink}</h2>
          <CategoryBtn category={response.drinks[0].strCategory} />
        </div>
        <p className='mt-4'>{response.drinks[0].strInstructions}</p>
      </div>
      <img src={response?.drinks[0].strDrinkThumb} alt='' className='w-[200px]' />
    </div>
  );
};
export default Detail;
