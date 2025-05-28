import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import About from "./components/About.jsx";
import Error from "./components/Error.jsx";
import Product from "./components/Product.jsx";
import Header from "./components/Header.jsx";
import Story from "./components/Story.jsx";
import ControlProduct from "./components/ControlProduct.jsx";
import MusicProduct from "./components/MusicProduct.jsx";
import IpadMountProduct from "./components/IpadMountProduct.jsx";
import Footer from "./components/Footer.jsx";
import SideMenu from "./components/SideMenu.jsx";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router";
import RondoPage from "./components/RondoPage.jsx";
const AppLayout = () => {
    return (
      <div className="app">
        {/* <App /> */}
        <div className="    bg-[linear-gradient(to_top,#faf5e8_10%,#ffffff_80%,#faf5e8_100%)]">
        <Header />
      </div>
        <Outlet />
        <Footer />
      </div>
    );
  };

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/products",
                element: <Product />
            },
            {
                path: "/products/controls",
                element: <ControlProduct />
            },
            {
                path: "/products/music",
                element: <MusicProduct />
            },
            {
                path: "/products/ipad-mounts",
                element: <IpadMountProduct />
            },
            {
                path: "/rondo",
                element: <RondoPage />
            },
            {
                path: "/story",
                element: <Story />
            },
            {
                path: "/footer",
                element: <Footer />
            },
            {
                path: "/side-menu",
                element: <SideMenu />
            }
        ],
        errorElement: <Error />
    },
    
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);