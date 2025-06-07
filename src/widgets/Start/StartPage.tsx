import Image from "next/image";
import Logo from "../../../public/logo.svg";
import css from "./StartPage.module.scss";
import Link from "next/link";
import clsx from "clsx";

const StartPage = () => {
  return (
    <>
      <div className={css.startPage}>
        <div className={css.startPageBox}>
          <Image src={Logo} alt="logo" className={css.startPageLogo} />
          <h2 className={css.startPageTitle}>Welcome to the app!</h2>
          <p className={css.startPageText}>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </p>
          <div className={css.startPageLinksBox}>
            <Link
              href={"/start/registration"}
              className={clsx(css.startPageLink, css.startPageLinkRegistr)}
            >
              Registration
            </Link>
            <Link
              href={"/start/login"}
              className={clsx(css.startPageLink, css.startPageLinkLogin)}
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartPage;
