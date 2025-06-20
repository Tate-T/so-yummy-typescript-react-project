"use client";
import { useSelector } from "react-redux";
import css from "./RecipeHero.module.scss";
import Image from "next/image";
import Container from "@/shared/Container/Container";
import { RootState } from "@/redux/store";
import { useParams } from "next/navigation";
import clock from "../../../../public/recipe/clock.svg";
export default function RecipeHero() {
  const { id } = useParams();
  const data = useSelector((state: RootState) => state.recipes.queries[`getRecipe("${id}")`]?.data);
  // console.log(data);
  if (!data) {
    return <></>;
  }
  return (
    <section className={css.section}>
      <Container>
        <div className={css.recipeHeader}>
          <h1 className={css.title}>{data.title}</h1>
          <p className={css.pidTitle}>{data.description}</p>
          <button className={css.titleButton}>Add to favorite recipes</button>
          <div className={css.timeBox}>
            <Image alt="awd" className={css.svgTime} src={clock} />
            <p className={css.txtTime}>{data.time} min</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
