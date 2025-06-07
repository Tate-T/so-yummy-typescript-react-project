import Link from "next/link";
import css from "./Header.module.scss";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import Search from "../../../public/header/header.svg"
console.log(css);

const Header = () => {
  return (
    <header className={css.header}>
      <Link href="./" className={css.headerLogo}>
      <Image src={Logo} alt="logo" className={css.headerLogoImg} />
      </Link>

      <nav className={css.headerNav}>
        <ul className={css.headerNavList}>
          <li className={css.headerNavItem}>
            <Link href="" className={css.headerNavItemPage}>
              Categories
            </Link>
          </li>
          <li className={css.headerNavItem}>
            <Link href="" className={css.headerNavItemPage}>
              Add recipes
            </Link>
          </li>
          <li className={css.headerNavItem}>
            <Link href="" className={css.headerNavItemPage}>
              My recipes
            </Link>
          </li>
          <li className={css.headerNavItem}>
            <Link href="" className={css.headerNavItemPage}>
              Favorites
            </Link>
          </li>
          <li className={css.headerNavItem}>
            <Link href="" className={css.headerNavItemPage}>
              Shopping list
            </Link>
          </li>
        </ul>
        <div className={css.headerSearch}>
        <Image src={Search} alt="search" className={css.headerSearchImg} />
        </div>
      </nav>

      <div className={css.userBoxRegist}>
        {true === null ? (
          <div className={css.user}>
            <img src="" alt="img" className={css.userImg} />
            <p className={css.userName}></p>
          </div>
        ) : (
          <Link href="" className={css.userBtnSignIn}>
            Sign in
          </Link>
        )}
      </div>

      <div className={css.boxTemeColor}>
        <div className={css.boxBtnSun} />
        <div className={css.boxBtnNight} />
      </div>
    </header>
  );
};

export default Header;
