import { Outlet } from 'react-router-dom';
import Header from '../components/panels/Header';

const Layout = () => {
  return (
    <>
      <main className='bg-white dark:bg-slate-800 min-h-screen text-slate-900 dark:text-white'>
        <Header />
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
