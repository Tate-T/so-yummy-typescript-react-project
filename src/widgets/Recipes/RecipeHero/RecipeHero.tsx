"use client";
import { useSelector } from "react-redux";
import css from "./RecipeHero.module.scss";
import Image from "next/image";
import Container from "@/shared/Container/Container";
import { RootState } from "@/redux/store";
import { useParams } from "next/navigation";
import clock from "../../../../public/recipe/clock.svg";
import { RecipeItem } from "@/entities/Recipe.type";
import { useToggleFavorite, useGetFavorite } from "@/redux/apis/favoriteApi";
import { useState, useEffect } from "react";
import MotivationCard from "@/shared/MotivationCard/MotivationCard";

export default function RecipeHero() {
  const { id }: { id: string } = useParams();
  const { data: dataFav } = useGetFavorite(1); 
  const favoriteTotal = dataFav?.total || 0;

  const data = useSelector(
    (state: RootState) =>
      state.recipes.queries[`getRecipe("${id}")`]?.data as RecipeItem | undefined,
  );

  const [toggleFavorite] = useToggleFavorite();
  const [showFirstCard, setShowFirstCard] = useState(false);
  const [showTenthCard, setShowTenthCard] = useState(false);

  useEffect(() => {
    const firstShown = localStorage.getItem("firstFavoriteCardShown") === "true";
    const tenthShown = localStorage.getItem("tenthFavoriteCardShown") === "true";

    if (favoriteTotal === 1 && !firstShown) {
      setShowFirstCard(true);
      localStorage.setItem("firstFavoriteCardShown", "true");
    }

    if (favoriteTotal === 10 && !tenthShown) {
      setShowTenthCard(true);
      localStorage.setItem("tenthFavoriteCardShown", "true");
    }
  }, [favoriteTotal]);

  if (!data) return null;

  const handleAddFavorite = () => {
    toggleFavorite(id);
  };

  return (
    <section className={css.section}>
      <Container>
        {showFirstCard && (
          <MotivationCard
            title="You have added the first recipe to your favorites!"
            imgPath="/motivationImgs/motivationImg4.jpg"
          />
        )}

        {showTenthCard && (
          <MotivationCard
            title="You have added 10 recipes to your favorites!"
            imgPath="/motivationImgs/motivationImg3.jpg"
          />
        )}

        <div className={css.recipeHeader}>
          <h1 className={css.title}>{data.title}</h1>
          <p className={css.pidTitle}>{data.description}</p>
          <button onClick={handleAddFavorite} className={css.titleButton}>
            Add to favorite recipes
          </button>
          <div className={css.timeBox}>
            <Image alt="clock" className={css.svgTime} src={clock} />
            <p className={css.txtTime}>{data.time} min</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
