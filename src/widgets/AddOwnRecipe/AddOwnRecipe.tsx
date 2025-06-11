"use client";

import Container from '@/shared/Container/Container';
import css from './addOwnRecipe.module.scss';
import AddRecipeForm from '@/shared/AddRecipeForm/AddRecipeForm';

export default ({}) => {
    return (<section className={css.addOwnRecipe}><Container>
        <h1 className={css.title}>Add recipe</h1>
        <AddRecipeForm />
    </Container></section>);
};