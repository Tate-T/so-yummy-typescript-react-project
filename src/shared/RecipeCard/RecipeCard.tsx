import Link from "next/link";
import Image from "next/image";
import css from "./RecipeCard.module.scss";
import { FC } from "react";

interface Props {
  id: string;
  title: string;
  imgPath: string;
}

const RecipeCard: FC<Props> = ({ id, title, imgPath }) => {
  return (
    <li className={css.card}>
      <Link href={`/recipes/${id}}`} className={css.cardLink}>
        <figure className={css.cardFigure}>
          <Image width={"100"} height={"100"} className={css.cardImg} src={imgPath} alt={title} />
          <figcaption className={css.cardText}>{title}</figcaption>
          {/* <div className={css.cardWrapper}>
            <h3 className={css.cardTitle}>{title}</h3>
          </div> */}
        </figure>
      </Link>
    </li>
  );
};

export default RecipeCard;
