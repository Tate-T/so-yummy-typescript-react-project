"use client";
import { useSelector } from "react-redux";

import Link from "next/link";
import css from "./Header.module.scss";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import Search from "../../../public/header/header.svg";
// import sprite from "../../../public/symbol-defs.svg"
import { selectUser } from "@/redux/slices/authSlice";
console.log(css);

const Header = () => {
  const user = useSelector(selectUser);

  const changeTheme = () => {
    const html = document.querySelector("html")! as HTMLHtmlElement;
    if (html.getAttribute("data-theme") !== "dark") {
      html.setAttribute("data-theme", "dark");
    } else {
      html.setAttribute("data-theme", "light");
    }
  };

  return (
    <header className={css.header}>
      <Link href="/" className={css.headerLogo}>
      {/* <svg>
        <use xlinkHref={`${sprite}#iconLogo`} />
      </svg> */}
        <Image src={Logo} alt="logo" className={css.headerLogoImg} />
      </Link>

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
            <Link href="/favorite" className={css.headerNavItemPage}>
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
            <Image src={Search} alt="search" className={css.headerSearchImg} />
            </Link>
          </li>
        </ul>
      </nav>

      <div className={css.userBoxRegist}>
        {user.name && (
          <div className={css.user}>
            <Image src={user.avatarUrl} alt={user.name} className={css.userImg} />
            <p className={css.userName}>{user.name}</p>
          </div>
        )}
      </div>

      <div className={css.boxTemeColor}>
        <button type="button" className={css.boxBtnSun} onClick={changeTheme} />
      </div>
    </header>
  );
};

export default Header;
