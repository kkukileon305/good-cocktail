import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../components/errors/ErrorPage';
import Detail from '../routes/Detail';
import Home from '../routes/Home';
import Layout from '../routes/Layout';
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
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
