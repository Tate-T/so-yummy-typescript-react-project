import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type typeOwnRecipeFull = {
    img: string,
    title: string,
    description: string,
    category: string,
    cookTime: string, 
    ingredients: {
        title: string,
        measure: string,
    }[],
    instructions: string,
    id: string,
};

const init: {
    list: typeOwnRecipeFull[]
} = {
    list: []
};

const ownRecipes = createSlice({
    name: 'ownRecipes',
    initialState: init,
    reducers: {
        addNewOwnRecipe(state, action) { state.list.push(action.payload); },
        delNewOwnRecipe(state, action) { state.list = state.list.filter(item => item.id !== action.payload) }
    },
})

export const ownRecipesReducer = ownRecipes.reducer;
export const { addNewOwnRecipe, delNewOwnRecipe } = ownRecipes.actions;
export const selectMyRecipsById = (state: RootState, id: string) => state.ownRecipes.list.find((ownRecipe) => ownRecipe.id === id);