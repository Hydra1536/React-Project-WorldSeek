import "./App.css";
import {Home} from "./pages/Home.jsx";
import {About} from "./pages/About.jsx";
import {Contact} from "./pages/Contact.jsx";
import {Country} from "./pages/Country.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout.jsx";
import { ErrorPage } from "./pages/ErrorPage.jsx";
import { CountryDetails } from "./components/Layout/CountryDetails.jsx";
const router = createBrowserRouter([
  {path:"/", element:<AppLayout />,
    errorElement:<ErrorPage />,
    children:[{
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {path: "/contact", element: <Contact />},
  {path: "/country", element: <Country />},
  {path: "/country/:id", element: <CountryDetails />}]}
]);



const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;