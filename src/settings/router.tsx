import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../components/errors/ErrorPage';
import Category from '../routes/Category';
import Detail from '../routes/Detail';
import Home from '../routes/Home';
import Layout from '../routes/Layout';
import Likes from '../routes/Likes';
import Random from '../routes/Random';
import Search from '../routes/Search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: '/detail/:idDrink',
        element: <Detail />,
      },
      {
        path: '/category/:strCategory',
        element: <Category />,
      },
      {
        path: '/random',
        element: <Random />,
      },
      {
        path: '/likes',
        element: <Likes />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
