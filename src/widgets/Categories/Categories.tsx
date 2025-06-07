"use client";

import css from "./Categories.module.scss";
import { useRef, useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Container from "@/shared/Container/Container";
import {
  useGetAllCategories,
  useGetCategoryRecipes,
} from "@/redux/apis/categoriesApi";
import { Category } from "@/entities/Category.type";
import useDraggableScroll from "use-draggable-scroll";
import clsx from "clsx";
import RecipeCard from "@/shared/RecipeCard/RecipeCard";
import { RecipeSmall } from "@/entities/Recipe.type";

const Categories = () => {
  // const param = useSearchParams().get("q");
  // const [selectedCategory, setSelectedCategory] = useState(
  //   param ? param : "breakfast"
  // );
  // useEffect(() => {}, [selectedCategory]);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("q") || "breakfast"
  );

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("q", selectedCategory);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [selectedCategory]);

  const { data, error, isLoading } = useGetAllCategories();
  const {
    data: recipeData,
    error: recipeError,
    isLoading: recipeIsLoading,
  } = useGetCategoryRecipes({
    categoryName: selectedCategory ? selectedCategory : "breakfast",
  });
  const categoriesListRef = useRef<HTMLUListElement>(null!);
  const { onMouseDown } = useDraggableScroll(categoriesListRef, {
    direction: "horizontal",
  });
  useEffect(() => {
    if (!categoriesListRef.current) return;
  }, []);
  return (
    <section className={css.categories}>
      <Container>
        <h1 className={css.categoriesTitle}>Categories</h1>
        {isLoading && <p>Loading...</p>}
        {data && !error && !isLoading && (
          <ul
            className={css.categoriesSublist}
            ref={categoriesListRef}
            onMouseDown={onMouseDown}
          >
            {data.map((category: Category) => (
              <li
                className={clsx(
                  css.categoriesSubitem,
                  category.title.toLowerCase() === selectedCategory &&
                    css.categoriesSubitemActive
                )}
                id={category._id}
                onClick={() =>
                  setSelectedCategory(category.title.toLowerCase())
                }
                key={category._id}
              >
                <p className={css.categoriesName}>{category.title}</p>
              </li>
            ))}
          </ul>
        )}
        {recipeIsLoading && <p>Loading...</p>}
        {recipeError && <p>Error!</p>}
        {!recipeIsLoading && !recipeError && recipeData && (
          <div className={css.recipeGrid}>
            <ul className={css.recipesList}>
              {recipeData.recipes.map((recipe: RecipeSmall) => (
                <RecipeCard
                  title={recipe.title}
                  imgPath={recipe.preview}
                  key={recipe._id}
                />
              ))}
            </ul>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Categories;
