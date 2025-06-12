import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const newRecipeSlice = createSlice({
    name: 'newRecipe',
    initialState: {
        img: '',
        title: '',
        descr: '',
        category: 'Breakfast',
        setCategoryOpen: false,
        cookTime: '5', 
        setCookTimeOpen: false,
        ingredients: [
            {
                ingredient: '',
                count: 0,
                type: 'tbs',
                setTypeOpen: false,
                setCluesOpen: false,
            }
        ],
        instruction: '',
    },
    reducers: {
        setTitle(state, action) { state.title = action.payload; },
        setDescr(state, action) { state.descr = action.payload; },
        setCategory(state, action) { state.category = action.payload; },
        setCookTime(state, action) { state.cookTime = action.payload; },
        addIngredient(state) { state.ingredients.push({
            ingredient: '',
            count: 0,
            type: 'tbs',
            setTypeOpen: false,
            setCluesOpen: false,
        }); },
        removeIngredient(state, action) { if(state.ingredients.length > 1) state.ingredients.splice(action.payload, 1); },
        setIngredient(state, action) { state.ingredients[action.payload.id].ingredient = action.payload.data },
        setCount(state, action) { state.ingredients[action.payload.id].count = action.payload.data },
        setType(state, action) { state.ingredients[action.payload.id].type = action.payload.data },
        toggleTypeOpen(state, action) { state.ingredients[action.payload].setTypeOpen = !(state.ingredients[action.payload].setTypeOpen) },
        setClueOpen(state, action) { state.ingredients[action.payload.id].setCluesOpen = action.payload.data },
        toggleCategoryOpen(state) { state.setCategoryOpen = !(state.setCategoryOpen) },
        toggleCookTimeOpen(state) { state.setCookTimeOpen = !(state.setCookTimeOpen) },
        setInstructions(state, action) { state.instruction = action.payload; }
    },
})

export const newRecipeReducer = newRecipeSlice.reducer;
export const { setInstructions, setTitle, setDescr, setCategory, setCookTime, addIngredient, removeIngredient, setIngredient, setCount, setType, toggleTypeOpen, toggleCategoryOpen, toggleCookTimeOpen, setClueOpen } = newRecipeSlice.actions;
export const selectNewRecipe = (state: RootState) => state.newRecipe;
