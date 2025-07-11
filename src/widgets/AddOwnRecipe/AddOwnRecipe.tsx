"use client";

import Container from '@/shared/Container/Container';
import css from './addOwnRecipe.module.scss';
import AddRecipeForm from '@/shared/AddRecipeForm/AddRecipeForm';
import FollowUs from '@/shared/FollowUs/FollowUs';
import PopularRecipes from '@/shared/PopularRecipes/PopularRecipes';

export default ({}) => {
    return (<section className={css.addOwnRecipe}><Container>
        <h1 className={css.title}>Add recipe</h1>
        <div className={css.mainCont}>
            <AddRecipeForm />
            <div className={css.subCont}>
                <FollowUs />
                <PopularRecipes />
            </div>
        </div>
    </Container></section>);
};