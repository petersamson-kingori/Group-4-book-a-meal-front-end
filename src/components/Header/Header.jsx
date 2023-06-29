import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import logo from "../../assets/images/ivy_logo_.jpeg";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
import "../../styles/header.css";
//import { useAuth } from "../../pages/auth";

const Header = ({ user, setUser }) => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

   const navigate = useNavigate();
  // const { logout } = useAuth();
  // const location = useLocation();
  // const redirectPath = location.state?.path || "/home";

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);

  
  
   // NOt used remove this it breaks

  function handleLogoutClick() {
    fetch("https://crave-masters-front-end.onrender.com/logout", { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setUser(null);
        navigate("/login");
      } else {
        navigate("/home");
      }
    });
  }
   // Not used remove this it breaks

  

  // function handleLogoutClick() {
  //   fetch("https://crave-masters-front-end.onrender.com/api/v1/logout", { method: "DELETE" })
  //     .then((res) => {
  //       if (res.ok) {
  //         logout();
  //         navigate(redirectPath, { replace: true });
          
  //       }
  //     });
  // }


  const nav__links = [
    {
      display: "Home",
      path: "/home",
      onClick: handleLogoutClick,
    },
    {
      display: "Foods",
      path: "/foods",
    },
    {
      display: "Cart",
      path: "/cart",
    },
    {
      display: "Contact",
      path: "/contact",
    },
    // {
    //   display: "Profile",
    //   path: "/profile",
    // },
    // {
    //   display: "Customer Reviews",
    //   path: "/reviews",
    // },
    {
      display: "Log in",
      path: "/logout",
    },
  ];

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>CraveMaster</h5>
          </div>

          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) => (navClass.isActive ? "active__menu" : "")}
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <i class="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            <span className="user">
              {user ? (
                <span>{user.username}</span>
              ) : (
                <Link to="/profile">
                  <i class="ri-user-line"></i>
                </Link>
              )}
            </span>

            <span className="mobile__menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
