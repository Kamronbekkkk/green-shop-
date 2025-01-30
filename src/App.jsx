import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import PlantCare from './Components/PlantCare/PlantCare';
import Blogs from './Components/Blogs/Blogs';
import NewArrivals from './Components/NewArrivals/NewArrivals';
import AllPlants from './Components/AllPlants/AllPlants';
import Sale from './Components/Sale/Sale';
import HomePage from './Components/HomePage/HomePage';
import SingleShop from './Components/SingleShop/SingleShop';
import ShopingCard from './Components/ShopingCard/ShopingCard';
import Checkout from './Components/checkout/checkout';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element:<HomePage />,
      children: ([
        {
          path: '/',
          element: <AllPlants />,
        },
        {
          path: '/newarrivals',
          element: <NewArrivals />
        },
        {
          path: '/sale',
          element: <Sale />,
        },
  ])
    },
    {
      path: '/single-shop',
      element: <SingleShop />,
    },
    {
      path: '/single-shop/shoping-card',
      element: <ShopingCard />,
    },
    {
      path: '/plantcare',
      element: <PlantCare />,
    },
    {
      path: '/blogs',
      element: <Blogs />,
    },
    {
      path: '/checkout',
      element: <Checkout />,
    },
    
  ])

  return  <RouterProvider router={router} />;
}

export default App
