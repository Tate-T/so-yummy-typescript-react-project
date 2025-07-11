import css from "./Socials.module.scss";

import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Socials = ({ size }: { size: number }) => {
  return (
    <>
      <ul className={css.socialsList}>
        <li>
          <Link href="https://www.facebook.com/" className={css.socialsPage}>
            <FaFacebook className={css.socialsIcon} size={size} />
          </Link>
        </li>
        <li>
          <Link href="https://www.youtube.com" className={css.socialsPage}>
            <FaYoutube className={css.socialsIcon} size={size} />
          </Link>
        </li>
        <li>
          <Link href="https://x.com/" className={css.socialsPage}>
            <FaTwitter className={css.socialsIcon} size={size} />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com" className={css.socialsPage}>
            <FaInstagram className={css.socialsIcon} size={size} />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Socials;
