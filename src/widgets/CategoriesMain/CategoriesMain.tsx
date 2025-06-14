"use client";

import css from "./CategoriesMain.module.scss";
import { RecipeSmall } from "@/entities/Recipe.type";
import { useGetMainRecipes } from "@/redux/apis/recipesApi";
import Container from "@/shared/Container/Container";
import RecipeCard from "@/shared/RecipeCard/RecipeCard";
import { useRouter } from "next/navigation";

const CategoriesMain = () => {
  const { data, error, isLoading } = useGetMainRecipes();
  const router = useRouter();
  return (
    <section className={css.recs}>
      <Container>
        {isLoading && <p className={css.recsLoadingText}>Loading...</p>}
        {error && <p className={css.recsErrorText}>Error occured</p>}
        {!isLoading && !error && data && (
          <ul className={css.recsList}>
            {Object.values(data).map((recipesArr, i) => (
              <li className={css.recsItem} key={i}>
                <h3 className={css.recsSubtitle}>{recipesArr[0].category}</h3>
                <ul className={css.recsSublist}>
                  {recipesArr.map((recipe: RecipeSmall) => (
                    <RecipeCard
                      key={recipe._id}
                      id={recipe._id}
                      title={recipe.title}
                      imgPath={recipe.preview}
                    />
                  ))}
                </ul>
                <button
                  className={css.recsBtn}
                  type="button"
                  onClick={() =>
                    router.push(`/categories?q=${recipesArr[0].category.toLowerCase()}`)
                  }
                >
                  See all
                </button>
              </li>
            ))}
          </ul>
        )}
        <button
          type="button"
          className={css.recsBrowseBtn}
          onClick={() => router.push("/categories")}
        >
          Other categories
        </button>
      </Container>
    </section>
  );
};

export default CategoriesMain;
