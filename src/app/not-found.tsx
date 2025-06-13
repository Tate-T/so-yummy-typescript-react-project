import Image from "next/image";
import img from "../../public/not-foundImg/not-found.png";
import style from "./not-found.module.scss";

export default function NotFound() {
  return (
    <div className={style.notFoundContainer}>
      <Image
        className={style.notFoundImg}
        src={img}
        alt="problemImg"
        priority
      />
      <h2 className={style.notFoundTitle}>We are sorry,</h2>
      <p className={style.notFoundSubTitle}>
        but the page you were looking for can’t be found..
      </p>
    </div>
  );
}
