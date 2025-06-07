import Link from "next/link";
import css from "./Header.module.scss";

console.log(css);

const Header = () => {
  return (
    <header className={css.header}>
      <Link href="./" className={css.headerLogo}>
        <svg
          width="44.000000"
          height="44.000000"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          // xlink="http://www.w3.org/1999/xlink"
        >
          <rect
            id="logo"
            rx="11.500000"
            width="43.000000"
            height="43.000000"
            transform="translate(0.500000 0.500000)"
            fill="#8BAA36"
            fill-opacity="1.000000"
          />
          <path
            id="Vector"
            d="M10 10.1L10 15.55L10 15.66L10 15.55M10 15.55C10 17.11 10.67 18.49 11.73 19.38C12.24 19.82 12.58 20.4 12.58 21.06L12.58 30.16C12.58 31.17 13.45 32 14.52 32C15.6 32 16.47 31.17 16.47 30.16L16.47 21.06C16.47 20.4 16.81 19.82 17.32 19.38C18.37 18.49 19.05 17.11 19.05 15.55L19.05 10.1L19.05 15.55"
            stroke="#FAFAFA"
            stroke-opacity="1.000000"
            stroke-width="2.000000"
            stroke-linejoin="round"
            stroke-linecap="round"
          />
          <path
            id="Vector"
            d="M14.52 16.11L14.52 10"
            stroke="#FAFAFA"
            stroke-opacity="1.000000"
            stroke-width="2.000000"
            stroke-linejoin="round"
            stroke-linecap="round"
          />
          <path
            id="Vector"
            d="M30.7 10.06L29.41 10.06C27.26 10.06 25.52 11.7 25.52 13.72L25.52 21.06C25.52 22.65 26.61 24 28.11 24.5L28.11 30.16C28.11 31.17 28.98 31.99 30.05 31.99C31.13 31.99 32 31.17 32 30.16L32 24.73L32 11.28C32 10.61 31.41 10.06 30.7 10.06Z"
            stroke="#FAFAFA"
            stroke-opacity="1.000000"
            stroke-width="2.000000"
            stroke-linejoin="round"
          />
        </svg>
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
          <svg
            width="24.000000"
            height="24.000000"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            //   xlink="http://www.w3.org/1999/xlink"
          >
            <rect
              id="search"
              rx="0.000000"
              width="23.000000"
              height="23.000000"
              transform="translate(0.500000 0.500000)"
              fill="#FFFFFF"
              fill-opacity="0"
            />
            <g clip-path="url(#clip296_1825)" className={css.headerSearchSvg}>
              <path
                id="Vector"
                d="M11 19C6.58 19 3 15.41 3 11C3 6.58 6.58 3 11 3C15.41 3 19 6.58 19 11C19 15.41 15.41 19 11 19Z"
                stroke="#22252A"
                stroke-opacity="1.000000"
                stroke-width="2.000000"
                stroke-linejoin="round"
              />
              <path
                id="Vector"
                d="M21 21L16.65 16.65"
                stroke="#22252A"
                stroke-opacity="1.000000"
                stroke-width="2.000000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
            </g>
          </svg>
        </div>
      </nav>

      <div className={css.userBoxRegist}>
        {true === null ? (
          <div className={css.user}>
            <img src="" alt="img" className={css.userImg} />
            <p className={css.userName}>sadasda</p>
          </div>
        ) : (
          <button type="button" className={css.userBtnSignIn}>
            Sign in
          </button>
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
