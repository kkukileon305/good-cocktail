import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BsSearch, BsArrowUp, BsCart, BsHeart } from 'react-icons/bs';
import { BiMenuAltLeft, BiMenuAltRight } from 'react-icons/bi';
import ThemeSwitcher from '../ThemeSwitcher';
import categories from '../../lib/categories';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setModal } from '../../store/slices/modalSlice';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const categoryBtn = useRef<HTMLButtonElement>(null);

  const dispatch = useAppDispatch();
  const cart = useAppSelector(store => store.cart);

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

          <Link to={'/search'} className='hidden sm:flex gap-2 justify-start items-center border border-red-400 px-2 py-1 rounded '>
            <p className='w-[100px] text-left'>Search...</p>
            <BsSearch />
          </Link>
        </div>
      </header>

      <div className='flex items-center sticky top-0 bg-white dark:bg-slate-800 shadow-md'>
        <div className={`max-w-[1260px] h-[50px] mx-auto w-full px-4 flex justify-between sm:justify-between gap-4 items-center relative`}>
          <button //
            ref={categoryBtn}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className='py-2 w-[160px] h-[50px] hidden sm:flex items-center gap-2 text-left'
          >
            <BiMenuAltLeft size={24} color='red' />
            <p className='font-bold text-red-500 text-xl'>Category</p>

            <ul className='absolute left-4 top-full text-red-500 bg-slate-100 dark:bg-slate-600 border-t border-slate-200 dark:border-slate-900 shadow-md' style={{ visibility: isHover ? 'visible' : 'hidden' }}>
              {categories.map(category => (
                <li key={category} className='text-left w-[160px] hover:bg-slate-400'>
                  <Link className='w-full p-2 block' to={`/category/${encodeURIComponent(category)}`}>
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </button>

          <Link to={'/'} className='flex sm:hidden'>
            <AiFillHome size={24} color='red' />
          </Link>

          {isScrolled && (
            <div className='hidden sm:flex items-center gap-4'>
              <Link to={'/'}>
                <AiFillHome size={24} color='red' />
              </Link>
              <div className='hidden sm:flex items-center gap-8'>
                <Link to={'/search'} className='flex gap-2 justify-start items-center border border-red-400 px-2 py-1 rounded '>
                  <p className='w-[100px] text-left'>Search...</p>
                  <BsSearch />
                </Link>
              </div>
            </div>
          )}

          <div className='flex items-center gap-4'>
            <Link to={'/random'} className='hidden sm:block text-red-500 font-bold'>
              Random
            </Link>
            <ThemeSwitcher />
            <Link to={'/likes'} className='relative'>
              <BsHeart size={24} color='red' />
              <span className='absolute left-4 bottom-2 font-bold text-white text-sm bg-red-500 rounded-full w-4 aspect-square flex justify-center items-center'>{cart.length}</span>
            </Link>
            <Link to={'/search'} className='sm:hidden'>
              <BsSearch size={24} color='red' />
            </Link>
            <button onClick={() => dispatch(setModal(true))} className='sm:hidden'>
              <BiMenuAltRight size={24} color='red' />
            </button>
          </div>
        </div>
      </div>

      {isScrolled && (
        <button //
          className='fixed right-4 bottom-4 bg-red-400 rounded-full p-2 text-white'
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
        >
          <BsArrowUp size={30} />
        </button>
      )}
    </>
  );
};
export default Header;
