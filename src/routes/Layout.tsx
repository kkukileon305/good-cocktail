import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '../components/panels/Header';

const Layout = () => {
  return (
    <>
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
