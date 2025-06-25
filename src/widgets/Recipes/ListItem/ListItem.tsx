"use client";
import css from "./ListItem.module.scss";
import Image from "next/image";
import photHeader from "../../../../public/recipe/salat.png";
import photoTest from "../../../../public/recipe/image.png";
import { useState } from "react";
import Container from "@/shared/Container/Container";
import { useGetRecipe } from "@/redux/apis/recipesApi";
import { RecipeItem } from "@/entities/Recipe.type";
import { useParams } from "next/navigation";
import { useAddShopingLIst } from "@/redux/apis/shipingListApi";
import { useRemoveShopingLIst } from "@/redux/apis/shipingListApi";
import { nanoid } from "@reduxjs/toolkit";
import { ingredient } from "@/entities/Ingridient.type";

const CustomCheckbox = ({ id, measure }: { id: string; measure: string }) => {
  const [checked, setChecked] = useState(false);
  const [addShopingList] = useAddShopingLIst();
  const [removeShopingList] = useRemoveShopingLIst();
  function addShopingLIstRemove(e: any) {
    setChecked(!checked);
    if (checked === false) {
      addShopingList({ productId: id, measure: measure });
      console.log("Added to shopping list:", id, measure);
    }
    if (checked === true) {
      removeShopingList({ productId: id, measure: measure });
      // console.log("Removed from shopping list:", id, measure);
    }
  }

  return (
    <label className={css.wrapper}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => addShopingLIstRemove(checked)}
        className={css.input}
      />
      <span className={css.box}>
        <svg viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect
            x="1"
            y="1"
            width="35"
            height="35"
            rx="6"
            stroke="#7E7E7E"
            strokeOpacity="0.5"
            strokeWidth="2"
            fill="#f3f8db"
          />
          {checked && (
            <path
              d="M11 19L17 25L27 13"
              stroke="#8BAA36"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </span>
    </label>
  );
};

export default function RecipeList() {
  const params = useParams();
  const id: string = params.id!.toString();
  // console.log(id);
  const { data, error, isLoading } = useGetRecipe(id);
  const recipes: ingredient[] = data?.ingredients ?? [];
  const instructions = data?.instructions.split("\r\n");
  // console.log(instructions);
  // console.log(data);
  return (
    <section className={css.section}>
      <Container>
        <div className={css.greeBox}>
          <div className={css.greeBoxList}>
            <div>
              <p className={css.greeTxt}>Ingredients</p>
            </div>
            <div className={css.secondTxtGree}>
              <p className={css.greeTxt}>Number</p>
              <p className={css.greeTxt}>Add to list</p>
            </div>
          </div>

          {isLoading ? (
            <p>Loading...</p>
          ) : recipes.length === 0 ? (
            <p>Nothing found</p>
          ) : (
            <ul className={css.recipes}>
              {recipes.map((recipe) => (
                <li className={css.itemIngr} key={recipe._id}>
                  <div className={css.itemInfo}>
                    <Image
                      alt={recipe.title}
                      className={css.photoItem}
                      src={recipe.thumb}
                      width={50}
                      height={50}
                    />
                    <p className={css.textIngr}>{recipe.title}</p>
                  </div>

                  <div className={css.boxcheck}>
                    <div className={css.boxGrama}>
                      <p className={css.txtGrama}>{recipe.measure}</p>
                    </div>
                    <CustomCheckbox id={recipe._id} measure={recipe.measure} />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={css.preparationBox}>
          <div className={css.preparation}>
            <h2 className={css.title}>Recipe Preparation</h2>
            <ol className={css.list}>
              {instructions?.map((data) => {
                return <li key={nanoid()}>{data}</li>;
              })}
            </ol>
          </div>
          {data?.preview && (
            <Image
              alt="Recipe image"
              className={css.salatImg}
              src={data?.preview}
              width={433}
              height={332}
            />
          )}
        </div>
      </Container>
    </section>
  );
}
