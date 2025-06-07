import css from "./RecipeCard.module.scss";
import { FC } from "react";

interface Props {
  title: string;
  imgPath: string;
}

const RecipeCard: FC<Props> = ({ title, imgPath }) => {
  return (
    <li className={css.card} style={{ backgroundImage: `url(${imgPath})` }}>
      <div className={css.cardWrapper}>
        <h3 className={css.cardTitle}>{title}</h3>
      </div>
    </li>
  );
};

export default RecipeCard;
