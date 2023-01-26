import { Link } from 'react-router-dom';

const Category = ({ category }: { category: string }) => {
  return (
    <Link to={`/category/${encodeURIComponent(category)}`} className='border px-2 py-1 block w-fit rounded-full font-bold'>
      {category}
    </Link>
  );
};
export default Category;
