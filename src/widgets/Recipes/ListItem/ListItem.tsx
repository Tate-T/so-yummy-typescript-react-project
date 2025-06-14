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

const CustomCheckbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <label className={css.wrapper}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className={css.input}
      />
      <span className={css.box}>
        <svg
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
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
  const id = params.id;
  console.log(id);
  const { data, error, isLoading } = useGetRecipe(id);
  const recipes: RecipeItem[] = data?.ingredients ?? [];
  const instructions = data?.instructions.split("\r\n");
  console.log(instructions);
  console.log(data);
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
                    <CustomCheckbox />
                  </div>
                </li>
              ))}
            </ul>
          )}
          {/* {console.log(recipes)} */}
          {/* {console.log(recipes)} */}
          {/* <ul className={css.listItem}>
						<li className={css.itemIngr}>
							<Image alt="Salmon" className={css.photoItem} src={photHeader} />
							<p>Salmon</p>
							<div className={css.boxcheck}>
								<div className={css.boxGrama}>
									<p>400 g</p>
								</div>
								<CustomCheckbox />
							</div>
						</li>
						<li className={css.itemIngr}>
							<Image alt="awd" className={css.photoItem} src={photoTest} />
							<p>awdaa</p>
							<div className={css.boxcheck}>
								<div className={css.boxGrama}>
									<p>400 g</p>
								</div>
								<CustomCheckbox />
							</div>
						</li>
					</ul> */}
        </div>

        <div className={css.preparationBox}>
          <div className={css.preparation}>
            <h2 className={css.title}>Recipe Preparation</h2>
            <ol className={css.list}>
              {instructions?.map((data) => {
                return <li>{data}</li>;
              })}
              {/* <li>Season the salmon, then rub with oil.</li>
              <li>Mix the dressing ingredients together.</li>
              <li>
                Halve, stone, peel and slice the avocados. Halve and quarter the cucumber
                lengthways, then cut into slices.
              </li>
              <li>
                Divide salad, avocado and cucumber between four plates, then drizzle with half the
                dressing.
              </li>
              <li>
                Heat a non-stick pan. Add the salmon and fry for 3–4 mins on each side until crisp
                but still moist inside.
              </li>
              <li>
                Put a salmon fillet on top of each salad and drizzle over the remaining dressing.
                Serve warm.
              </li> */}
            </ol>
          </div>
          {/* <Image width={433}  className={css.salatImg} src={data?.preview} alt="Recipe image" /> */}
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

// "Heat the flat grill plate over a low heat, on top of 2 rings/flames if it fits, and brush sparingly with light olive oil.\r\nCook the sausages first. Add the sausages to the hot grill plate/the coolest part if there is one and allow to cook slowly for about 15-20 minutes, turning occasionally, until golden. After the first 10 minutes, increase the heat to medium before beginning to cook the other ingredients. If you are struggling for space, completely cook the sausages and keep hot on a plate in the oven.\r\nSnip a few small cuts into the fatty edge of the bacon. Place the bacon straight on to the grill plate and fry for 2-4 minutes each side or until your preferred crispiness is reached. Like the sausages, the cooked bacon can be kept hot on a plate in the oven.\r\nFor the mushrooms, brush away any dirt using a pastry brush and trim the stalk level with the mushroom top. Season with salt and pepper and drizzle over a little olive oil. Place stalk-side up on the grill plate and cook for 1-2 minutes before turning and cooking for a further 3-4 minutes. Avoid moving the mushrooms too much while cooking, as this releases the natural juices, making them soggy.\r\nFor the tomatoes, cut the tomatoes across the centre/or in half lengthways if using plum tomatoes , and with a small, sharp knife remove the green 'eye'. Season with salt and pepper and drizzle with a little olive oil. Place cut-side down on the grill plate and cook without moving for 2 minutes. Gently turn over and season again. Cook for a further 2-3 minutes until tender but still holding their shape.\r\nFor the black pudding, cut the black pudding into 3-4 slices and remove the skin. Place on the grill plate and cook for 1½-2 minutes each side until slightly crispy.\r\nFor 'proper' fried bread it's best to cook it in a separate pan. Ideally, use bread that is a couple of days old. Heat a frying pan to a medium heat and cover the base with oil. Add the bread and cook for 2-3 minutes each side until crispy and golden. If the pan becomes too dry, add a little more oil. For a richer flavour, add a knob of butter after you turn the slice.\r\nFor the fried eggs, break the egg straight into the pan with the fried bread and leave for 30 seconds. Add a good knob of butter and lightly splash/baste the egg with the butter when melted. Cook to your preferred stage, season and gently remove with a fish slice.\r\nOnce all the ingredients are cooked, serve on warm plates and enjoy straight away with a good squeeze of tomato ketchup or brown sauce."
