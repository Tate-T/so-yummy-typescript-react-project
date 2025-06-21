"use client";
import { useSelector } from "react-redux";

import { LuAlignLeft } from "react-icons/lu";

import Link from "next/link";
import css from "./Header.module.scss";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
// import Search from "../../../public/header/header.svg";
// import sprite from "../../../public/symbol-defs.svg";
import { selectUser } from "@/redux/slices/authSlice";
import Container from "../Container/Container";
import { LuSearch } from "react-icons/lu";
import { useState } from "react";
import Burger from "./Burger/Burger";
const Header = () => {
  const [openBurger, setOpenBurger] = useState<true | false>(false);
  const user = useSelector(selectUser);

  const changeTheme = () => {
    const html = document.querySelector("html")! as HTMLHtmlElement;

    if (html.getAttribute("data-theme") !== "dark") {
      html.setAttribute("data-theme", "dark");
    } else {
      html.setAttribute("data-theme", "light");
    }
  };

const openBurgerFunction = () : void => {
  if (!openBurger) {
    setOpenBurger(true);
  } else {
    setOpenBurger(false);
  }
}

  return (
    <header className={css.header}>
      <Container>
        <Link href="/" className={css.headerLogo}>
          <Image src={Logo} alt="logo" className={css.headerLogoImg} />
        </Link>
        {openBurger ? (
          <Burger openBurger={openBurgerFunction}/>
        ) : (
          <nav className={css.headerNav}>
            <ul className={css.headerNavList}>
              <li className={css.headerNavItem}>
                <Link href="/categories" className={css.headerNavItemPage} data-text="Categories">
                  Categories
                </Link>
              </li>
              <li className={css.headerNavItem}>
                <Link href="/add" className={css.headerNavItemPage}>
                  Add recipes
                </Link>
              </li>
              <li className={css.headerNavItem}>
                <Link href="/my" className={css.headerNavItemPage}>
                  My recipes
                </Link>
              </li>
              <li className={css.headerNavItem}>
                <Link href="/favorites" className={css.headerNavItemPage}>
                  Favorites
                </Link>
              </li>
              <li className={css.headerNavItem}>
                <Link href="" className={css.headerNavItemPage}>
                  Shopping list
                </Link>
              </li>
              <li className={css.headerNavItem}>
                <Link href="/recipes" className={css.headerNavItemPage}>
                  <LuSearch className={css.headerSearchImg} />
                </Link>
              </li>
            </ul>
          </nav>
        )}
        <div className={css.userBoxRegist}>
          {user.name && (
            <div className={css.user}>
              <div className={css.test}>
                <Image
                  src={user.avatarURL}
                  alt={user.name}
                  className={css.userImg}
                  fill
                  // width={44}
                  // height={44}
                />
              </div>
              <p className={css.userName}>{user.name}</p>
            </div>
          )}
        </div>
        {!openBurger && (
          <div className={css.boxTemeColor}>
            <button type="button" className={css.boxBtnSun} onClick={changeTheme} />
          </div>
        )}

        <div className={css.burgerBox}>
          <button type="button" onClick={openBurgerFunction}>
            <LuAlignLeft className={css.burgerBtn} />
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
