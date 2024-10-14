import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./header.module.css";
// import Logo from "../../assets/icons/logo.svg";
// import cartIcon from "../../assets/icons/cart.svg";

const Header = () => {
  const navigate = useNavigate();
  function HandleClick() {
    navigate("/basket");
  }
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <NavLink to="/">
          <img src={logo} />
        </NavLink>
      </div>
      <div>
        <Nav />
      </div>
      <div className={styles.headercart}>
        <img src={cart} onClick={HandleClick} />
      </div>
    </header>
  );
};
export default Header;
