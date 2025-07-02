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
import LogOut from "./LogOut/LogOut";
import User from "./User/User";
import FocusElement from "./FocusElement/FocusElement";

const Header = () => {
  const [openBurger, setOpenBurger] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [openUser, setOpenUser] = useState<boolean>(false);
  const [openLogOut, setOpenLogOut] = useState<boolean>(false);
  const user = useSelector(selectUser);
  const html = document.querySelector("html")! as HTMLHtmlElement;
  html.setAttribute("data-theme", localStorage.getItem("theme") ?? "light");

  const changeTheme = () => {
    if (html.getAttribute("data-theme") !== "dark") {
      localStorage.setItem("theme", "dark");
      html.setAttribute("data-theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
      html.setAttribute("data-theme", "light");
    }
  };

  const openBurgerFunction = (): void => {
    if (!openBurger) {
      setOpenBurger(true);
    } else {
      setOpenBurger(false);
    }
  };

  const openModalOnKey = (event: KeyboardEvent): void => {
    if (event.key === "Escape") {
      setOpenBurger(false);
      setOpenUser(false);
      setOpenLogOut(false);
    }
  };

  document.addEventListener("keydown", openModalOnKey);

  const openUserFunction = (): void => {
    if (!openUser) {
      setOpenUser(true);
    } else {
      setOpenUser(false);
    }
  };

  const openLogOutunction = (): void => {
    if (!openLogOut) {
      setOpenLogOut(true);
      setOpenUser(false);
    } else {
      setOpenLogOut(false);
      setOpenUser(true);
    }
  };

  return (
    <>
      {openBurger && <Burger openBurger={openBurgerFunction} />}
      <header className={css.header}>
        <Container>
          <Link href="/" className={css.headerLogo}>
            <Image src={Logo} alt="logo" className={css.headerLogoImg} />
          </Link>
          {openBurger ? (
            // <Burger openBurger={openBurgerFunction}/>
            <></>
          ) : (
            <nav className={css.headerNav}>
              <ul className={css.headerNavList}>
                <li className={css.headerNavItem}>
                  <Link href="/categories" className={css.headerNavItemPage}>
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
                  <Link href="/shoping-list" className={css.headerNavItemPage}>
                    Shopping list
                  </Link>
                </li>
                <li className={css.headerNavItem}>
                  <Link href="/recipes" className={css.headerNavItemPage} data-search-icon>
                    <LuSearch className={css.headerSearchImg} />
                  </Link>
                </li>
              </ul>
            </nav>
          )}
          <div className={css.userBoxRegist} onClick={openUserFunction}>
            {user.name && (
              <>
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
                  <p
                    className={css.userName}
                    onMouseEnter={() => {
                      setIsFocused(true);
                    }}
                    onMouseLeave={() => {
                      setIsFocused(false);
                    }}
                  >
                    {user.name}
                  </p>
                </div>
                {isFocused && <FocusElement username={user.name} />}
              </>
            )}
          </div>
          {!openBurger && (
            <div className={css.boxTemeColor} onClick={changeTheme}>
              <button type="button" className={css.boxBtnSun} />
            </div>
          )}

          <div className={css.burgerBox}>
            <button type="button" onClick={openBurgerFunction}>
              <LuAlignLeft className={css.burgerBtn} />
            </button>
          </div>
        </Container>
      </header>
      {openLogOut && <LogOut openLogOutunction={openLogOutunction} />}
      {openUser && <User openLogOutunction={openLogOutunction} />}
    </>
  );
};

export default Header;
