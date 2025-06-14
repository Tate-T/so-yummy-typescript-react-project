"use client";

import css from "./Recipes.module.scss";
import Container from "@/shared/Container/Container";
import Dropdown from "./Dropdown/Dropdown";
import { useRef, useState, FormEvent } from "react";
import { useGetRandomRecipes, useSearchRecipes } from "@/redux/apis/recipesApi";
import { RecipeSmall, SearchParams } from "@/entities/Recipe.type";
import RecipeCard from "@/shared/RecipeCard/RecipeCard";
import BasketImg from "@/../public/recipes/basket.webp";
import Image from "next/image";

const items = ["Title", "Ingredients"];

const Recipes = () => {
  const [selectedValue, setSelectedValue] = useState<"Title" | "Ingredients">("Title");
  const [inputQuery, setInputQuery] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { data, error, isLoading } = inputQuery
    ? useSearchRecipes({
        p: SearchParams[selectedValue],
        q: inputQuery,
      })
    : useGetRandomRecipes({ page: 1, limit: 12 });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputRef.current) setInputQuery(inputRef.current.value);
  };
  return (
    <section className={css.search}>
      <Container>
        <h1 className={css.searchTitle}>Search</h1>
        <form className={css.searchForm} onSubmit={handleSubmit}>
          <div className={css.searchFormInputWrapper}>
            <input
              type="text"
              name="query"
              className={css.searchInput}
              placeholder="Recipe name"
              ref={inputRef}
            />
            <button type="submit" className={css.searchBtn}>
              Search
            </button>
          </div>
          <div className={css.searchDropdownWrapper}>
            <p className={css.searchSubtext}>Search by:</p>
            <Dropdown
              items={["Title", "Ingredients"]}
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
            />
          </div>
        </form>
        {!error && !isLoading && data?.recipes && (
          <ul className={css.searchList}>
            {data.recipes.map(({ _id, preview, title }: RecipeSmall) => (
              <RecipeCard key={_id} id={_id} title={title} imgPath={preview} />
            ))}
          </ul>
        )}
        {!error && !isLoading && data?.recipes && data.recipes.length === 0 && (
          <div className={css.empty}>
            <Image className={css.emptyImg} src={BasketImg} alt="basket" />
            <p className={css.emptyText}>Try looking for something else..</p>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Recipes;
