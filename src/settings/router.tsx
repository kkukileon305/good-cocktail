import { createBrowserRouter } from 'react-router-dom';
import Layout from '../routes/Layout';
import Search from '../routes/Search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/search',
        element: <Search />,
      },
    ],
  },
]);

export default router;
