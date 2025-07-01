"use client";
import { useSelector } from "react-redux";
import css from "./RecipeHero.module.scss";
import Image from "next/image";
import Container from "@/shared/Container/Container";
import { RootState } from "@/redux/store";
import { useParams } from "next/navigation";
import clock from "../../../../public/recipe/clock.svg";
import { RecipeItem } from "@/entities/Recipe.type";
import { useToggleFavorite } from "@/redux/apis/favoriteApi";
import { useState } from "react";
import MotivationCard from "@/shared/MotivationCard/MotivationCard";
import parhImg from "../../../../public/motivationImgs/motivationImg4.jpg";
import parhImgTwo from "../../../../public/motivationImgs/motivationImg3.jpg";
export default function RecipeHero() {
  const { id }: { id: string } = useParams();
  const data = useSelector(
    (state: RootState) =>
      state.recipes.queries[`getRecipe("${id}")`]?.data as RecipeItem | undefined,
  );
  const [numToFaforites, setNumToFaforites] = useState(0);
  const [toggleFavorite] = useToggleFavorite();
  if (!data) {
    return <></>;
  }

  function addNum(id: string) {
    toggleFavorite(id);
    setNumToFaforites((prev) => prev + 1);
    console.log(numToFaforites);
  }

  return (
    <section className={css.section}>
      <Container>
        {numToFaforites === 1 && (
          <MotivationCard
            title="You have added the first recipe to your favorites!"
            imgPath={"/motivationImgs/motivationImg4.jpg"}
          />
        )}

        {numToFaforites === 10 && (
          <MotivationCard
            title="You have added 10 recipes to your favorites!"
            imgPath={"/motivationImgs/motivationImg3.jpg"}
          />
        )}

        <div className={css.recipeHeader}>
          <h1 className={css.title}>{data.title ? data.title : "yuy"}</h1>
          <p className={css.pidTitle}>{data!.description}</p>
          <button onClick={() => id && addNum(id)} className={css.titleButton}>
            Add to favorite recipes
          </button>
          <div className={css.timeBox}>
            <Image alt="awd" className={css.svgTime} src={clock} />
            <p className={css.txtTime}>{data!.time} min</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
