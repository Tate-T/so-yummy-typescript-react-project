import Link from "next/link";
import css from "./Footer.module.scss";
import Logo from "../../../public/footer/footerLogo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className={css.footer}>
        <div className={css.footerContainer}>
          <div className={css.footerBoxInfo}>
            <Link href="./" className={css.footerLogo}>
              <Image src={Logo} alt="logo" className={css.footergoImg} />
            </Link>
            <h2 className={css.footerLogoText}>So Yummy</h2>
            <ul className={css.footerLogoList}>
              <li className={css.footerLogoItem}>
                <p className={css.footerLogoItemText}>
                  Database of recipes that can be replenished{" "}
                </p>
              </li>
              <li className={css.footerLogoItem}>
                <p className={css.footerLogoItemText}>
                  Flexible search for desired and unwanted ingredients
                </p>
              </li>
              <li className={css.footerLogoItem}>
                <p className={css.footerLogoItemText}>
                  Ability to add your own recipes with photos
                </p>
              </li>
              <li className={css.footerLogoItem}>
                <p className={css.footerLogoItemText}>
                  Convenient and easy to use
                </p>
              </li>
            </ul>
          </div>

          <ul className={css.footerNavigation}>
            <li className={css.footerNavigationItem}>
              <Link href="" className={css.footerNavigationPage}>
                Categories
              </Link>
            </li>
            <li className={css.footerNavigationItem}>
              <Link href="" className={css.footerNavigationPage}>
                Add recipes
              </Link>
            </li>
            <li className={css.footerNavigationItem}>
              <Link href="" className={css.footerNavigationPage}>
                My recipes
              </Link>
            </li>
            <li className={css.footerNavigationItem}>
              <Link href="" className={css.footerNavigationPage}>
                Favorites
              </Link>
            </li>
            <li className={css.footerNavigationItem}>
              <Link href="" className={css.footerNavigationPage}>
                Shopping list
              </Link>
            </li>
          </ul>

          <form className={css.footerForm}>
            <h2 className={css.footerFormTitle}>Subscribe to our Newsletter</h2>
            <p className={css.footerFormText}>
              Subscribe up to our newsletter. Be in touch with latest news and
              special offers, etc.
            </p>
            <input
              placeholder="Enter your email address"
              className={css.footerFormInput}
            ></input>
            <button type="submit" className={css.footerFormBtn}>
              Subscribe
            </button>
          </form>

          <ul className={css.footerNetworksList}>
            <li className={css.footerNetworksItem}>
              <Link href="" className={css.footerNetworksPage}>
                1
              </Link>
            </li>
            <li className={css.footerNetworksItem}>
              <Link href="" className={css.footerNetworksPage}>
                2
              </Link>
            </li>
            <li className={css.footerNetworksItem}>
              <Link href="" className={css.footerNetworksPage}>
                3
              </Link>
            </li>
            <li className={css.footerNetworksItem}>
              <Link href="" className={css.footerNetworksPage}>
                4
              </Link>
            </li>
          </ul>
        </div>
      </footer>

      <div className={css.footerEndBox}>
        <div className={css.footerContainer}>
          <ul className={css.footerEndList}>
            <li>
              <p className={css.footerEndText}>© 2023 All Rights Reserved.</p>
            </li>
            <li>
              <p className={css.footerEndText}>Terms of Service</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
