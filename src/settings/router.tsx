import { createBrowserRouter } from 'react-router-dom';
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
    ],
  },
]);

export default router;
