"use client";

import css from "./Recipes.module.scss";
import Container from "@/shared/Container/Container";
import Dropdown from "./Dropdown/Dropdown";
import { useState } from "react";

const items = ["Title", "Ingredients"];

const Recipes = () => {
  const [selectedValue, setSelectedValue] = useState(items[0]);
  return (
    <section className={css.search}>
      <Container>
        <h1 className={css.searchTitle}>Search</h1>
        <form className={css.searchForm}>
          <div className={css.searchFormInputWrapper}>
            <input
              type="text"
              className={css.searchInput}
              placeholder="Recipe name"
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
        <ul className={css.searchList}></ul>
      </Container>
    </section>
  );
};

export default Recipes;
