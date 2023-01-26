import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch, BsCart } from 'react-icons/bs';
import ThemeSwitcher from '../ThemeSwitcher';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      scrollY > 68 ? setIsScrolled(true) : setIsScrolled(false);
    };

    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <>
      <header>
        <div className='max-w-[1260px] mx-auto w-full p-4 flex justify-between items-center'>
          <h1 className='font-bold text-3xl'>
            <Link to={'/'}>Good Cocktail</Link>
          </h1>

          <Link to={'/search'} className='flex gap-2 justify-start items-center border border-red-400 px-2 py-1 rounded '>
            <p className='w-[100px] text-left'>검색...</p>
            <BsSearch />
          </Link>
        </div>
      </header>
      <div className='flex items-center sticky top-0 bg-white dark:bg-slate-800 shadow-md'>
        <div className='max-w-[1260px] h-[50px] mx-auto w-full px-4 py-2 flex justify-between items-center relative'>
          <p>This is Page.</p>

          {isScrolled && (
            <div className='flex items-center gap-8'>
              <Link to={'/search'} className='flex gap-2 justify-start items-center border border-red-400 px-2 py-1 rounded '>
                <p className='w-[100px] text-left'>검색...</p>
                <BsSearch />
              </Link>
            </div>
          )}

          <div className='flex items-center gap-4'>
            <ThemeSwitcher />
            <button>
              <BsCart size={24} color='red' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
