'use client';

import Link from "next/link";
import css from "./Footer.module.scss";
import Logo from "../../../public/footer/footerLogo.svg";
import Image from "next/image";
import Container from "../Container/Container";
import Socials from "../Socials/Socials";
import { RxEnvelopeClosed } from "react-icons/rx";
import { useSubscribe } from "@/redux/apis/subscribeApi";
import { toast } from "react-toastify";
import { z } from "zod/v4";
const Footer = () => {
  const [subscribe] = useSubscribe();
  const emailSchema = z.string().email("Invalid email address");
  return (
    <>
      <footer className={css.footer}>
        <Container>
          <div className={css.footerBoxInfo}>
            <Link href="/" className={css.footerLogo}>
              <Image src={Logo} alt="logo" className={css.footergoImg} />
            </Link>
            <h2 className={css.footerLogoText}>So Yummy</h2>
            <ul className={css.footerLogoList}>
              <li className={css.footerLogoItem}>
                <p className={css.footerLogoItemText}>
                  Database of recipes that can be replenished
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
                <p className={css.footerLogoItemText}>Convenient and easy to use</p>
              </li>
            </ul>
          </div>

          <ul className={css.footerNavigation}>
            <li className={css.footerNavigationItem}>
              <Link href="/categories" className={css.footerNavigationPage}>
              Ingredients
              </Link>
            </li>
            <li className={css.footerNavigationItem}>
              <Link href="/add" className={css.footerNavigationPage}>
                Add recipes
              </Link>
            </li>
            <li className={css.footerNavigationItem}>
              <Link href="/my" className={css.footerNavigationPage}>
                My recipes
              </Link>
            </li>
            <li className={css.footerNavigationItem}>
              <Link href="/favorite" className={css.footerNavigationPage}>
                Favorites
              </Link>
            </li>
            <li className={css.footerNavigationItem}>
              <Link href="/shoping-list" className={css.footerNavigationPage}>
                Shopping list
              </Link>
            </li>
          </ul>

          <form className={css.footerForm} onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              const emailData = emailSchema.safeParse(e.currentTarget.emailInput.value)
              if (emailData.success) {
                subscribe(emailData.data);
                toast.success("You subscribed succesfully!");
              } else {
                toast.error("Invalid email address");
              }
            }}>
            <h2 className={css.footerFormTitle}>Subscribe to our Newsletter</h2>
            <p className={css.footerFormText}>
              Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.
            </p>
            <div className={css.inputBox}>
              <RxEnvelopeClosed className={css.inputIcon} />
              <input name="emailInput" placeholder={`Enter your email address`} pattern="^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$" className={css.footerFormInput} required />
            </div>
            <button type="submit" className={css.footerFormBtn} data-theme="dark">
              Subscribe
            </button>
          </form>

          <div className={css.footerNetworksList}>
            <Socials size={25} />
          </div>
        </Container>
      </footer>

      <div className={css.footerEndBox}>
        <Container>
          <ul className={css.footerEndList}>
            <li>
              <p className={css.footerEndText}>© 2025 All Rights Reserved.</p>
            </li>
            <li>
              <p className={css.footerEndText}>Terms of Service</p>
            </li>
          </ul>
        </Container>
      </div>
    </>
  );
};

export default Footer;
