import { createBrowserRouter } from 'react-router-dom';
import Layout from '../routes/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  },
]);

export default router;