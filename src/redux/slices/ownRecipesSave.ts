import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { typeOwnRecipeFull } from '../../entities/OwnRecipe.type';

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