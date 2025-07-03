"use client";
import css from "./Burger.module.scss";
import Logo from "../../../../public/logo.svg";
import Image from "next/image";
import Container from "../../Container/Container";
import Link from "next/link";
import { LuSearch } from "react-icons/lu";
import { TfiClose } from "react-icons/tfi";

const Burger = ({ openBurger }: { openBurger: () => void }) => {
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
  return (
    <div className={css.burgerMenu} data-open-modal>
      <Container>
        <div className={css.boxIcon}>
          <Link href="/" className={css.headerLogo}>
            <Image src={Logo} alt="logo" className={css.headerLogoImg} />
          </Link>
          <TfiClose className={css.closeIcon} type="button" onClick={openBurger} />
        </div>

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
              <Link href="/recipes" className={css.headerNavItemPage}>
                <LuSearch className={css.headerSearchImg} />
                Search
              </Link>
            </li>
          </ul>
        </nav>

        <div className={css.boxTemeColor}>
          <button type="button" className={css.boxBtnSun} onClick={changeTheme} />
        </div>
      </Container>
    </div>
  );
};

export default Burger;
