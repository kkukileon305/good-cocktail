import { Link } from 'react-router-dom';
import categories from '../../lib/categories';
import { useAppDispatch } from '../../store/hooks';
import { setModal } from '../../store/slices/modalSlice';
import CommonModal from './CommonModal';

const MenuModal = () => {
  const dispatch = useAppDispatch();

  return (
    <CommonModal>
      <h2 className='font-bold text-xl text-red-500'>Category</h2>
      <ul className='my-2' onClick={() => dispatch(setModal(false))}>
        {categories.map(category => (
          <li key={category} className=''>
            <Link className='w-full py-2 text-red-300 block' to={`/category/${encodeURIComponent(category)}`}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
      <Link onClick={() => dispatch(setModal(false))} to={'/random'} className='text-red-500 font-bold text-xl'>
        Random
      </Link>
    </CommonModal>
  );
};

export default MenuModal;
