import { BsCart } from 'react-icons/bs';
import SearchBox from '../components/SearchBox';

const Layout = () => {
  return (
    <>
      <header>
        <div className='max-w-[1260px] mx-auto p-4 flex justify-between items-center relative'>
          <h1 className='font-bold text-3xl py-1'>Good App</h1>
          <SearchBox />
          <button>
            <BsCart size={24} color='red' />
          </button>
        </div>
      </header>
      <main>main</main>
    </>
  );
};
export default Layout;
