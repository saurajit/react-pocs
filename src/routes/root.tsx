
import {
  createBrowserRouter
} from "react-router-dom";
import Cart from "../pages/cart";
import Catalog from "../pages/catalog";
import PageWrapper from "../pages/pageWrapper";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <PageWrapper />,
    children: [
      {
        path: '',
        element: <Catalog />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  },
]);

export default routes;