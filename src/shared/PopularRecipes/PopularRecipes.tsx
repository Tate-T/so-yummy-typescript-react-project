import { useGetPopularRecipes } from '@/redux/apis/recipesApi';
import css from './popularRecipes.module.scss';
import { RecipeSmall } from '@/entities/Recipe.type';
import Link from "next/link";

export default () => {
    const { data, error, isLoading } = useGetPopularRecipes();
    const recipes: RecipeSmall[] = data?.recipes ?? [];
    return (<section>
        <h3 className={css.subtitle}>Popular recipe</h3>
        {isLoading ? <p>Loading...</p> : <ul className={css.recipes}>{recipes.map((recipe: RecipeSmall) => <li key={recipe._id}><Link className={css.recipe} href="/add">
            <img src={recipe.preview} className={css.recipePhoto} alt='recipe photo'/>
            <div className={css.infoCont}>
                <h4 className={css.recipeTitle}>{recipe.title}</h4>
                <p className={css.recipeDescr}>{recipe.description}</p>
            </div>
        </Link></li>)}</ul>}
    </section>);
}