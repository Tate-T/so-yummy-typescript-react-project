"use client";

import css from "./Recipes.module.scss";
import Container from "@/shared/Container/Container";
import Dropdown from "./Dropdown/Dropdown";
import { useRef, useState, FormEvent, useEffect } from "react";
import { useGetRandomRecipes, useSearchRecipes } from "@/redux/apis/recipesApi";
import { RecipeSmall, SearchParams } from "@/entities/Recipe.type";
import RecipeCard from "@/shared/RecipeCard/RecipeCard";
import BasketImg from "@/../public/recipes/basket.webp";
import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";

const items = ["Title", "Ingredients"];

const Recipes = () => {
  const [selectedValue, setSelectedValue] = useState<"Title" | "Ingredients">("Title");
  const searchParams = useSearchParams();
  const [inputQuery, setInputQuery] = useState<string>(searchParams.get("q") || "");
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const { data, error, isLoading } = inputQuery
    ? useSearchRecipes({
        p: SearchParams[selectedValue],
        q: inputQuery,
      })
    : useGetRandomRecipes({ page: 1, limit: 12 });

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("q", inputQuery);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
    if (inputRef.current) {
      inputRef.current.value = inputQuery;
    }
  }, [inputQuery]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      const regex: RegExp = new RegExp("[A-Za-z]");
      const value = inputRef.current.value;
      if (regex.test(value)) {
        setInputQuery(value);
      } else {
        if (value === "") return;
        toast.error("Invalid query. Use only latin letters");
      }
    }
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
