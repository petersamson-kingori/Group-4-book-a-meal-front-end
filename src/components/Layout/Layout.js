import React from "react";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routes from "../../routes/Routers";

import Carts from "../UI/cart/Carts.jsx";
import { useSelector } from "react-redux";
import { AuthProvider } from "../../pages/auth";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <div>
      <AuthProvider> {/* Add the AuthProvider wrapper here */}
        <Header />
      </AuthProvider>

      {showCart && <Carts />}

      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
