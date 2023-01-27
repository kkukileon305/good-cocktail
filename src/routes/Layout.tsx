import { Outlet, ScrollRestoration } from 'react-router-dom';
import MenuModal from '../components/modals/MenuModal';
import Header from '../components/panels/Header';
import { useAppSelector } from '../store/hooks';

const Layout = () => {
  const modal = useAppSelector(store => store.modal);

  return (
    <>
      {modal && <MenuModal />}
      <main className='bg-white dark:bg-slate-800 min-h-screen text-slate-900 dark:text-white'>
        <Header />
        <div className='max-w-[1260px] mx-auto p-4'>
          <Outlet />
        </div>
      </main>
      <ScrollRestoration />
    </>
  );
};
export default Layout;
