import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initIngrid = {
    ingredient: '',
    ingredientId: '',
    thumb: '',
    count: 0,
    type: 'tbs',
    setTypeOpen: false,
    setCluesOpen: false,
};

const init = {
    img: '',
    title: '',
    descr: '',
    category: 'Breakfast',
    setCategoryOpen: false,
    time: '5', 
    setCookTimeOpen: false,
    ingredients: [initIngrid],
    instruction: '',
}

const newRecipeSlice = createSlice({
    name: 'newRecipe',
    initialState: init,
    reducers: {
        setImg(state, action) { state.img = action.payload; },
        setTitle(state, action) { state.title = action.payload; },
        setDescr(state, action) { state.descr = action.payload; },
        setCategory(state, action) { state.category = action.payload; },
        setCookTime(state, action) { state.time = action.payload; },
        addIngredient(state) { state.ingredients.push(initIngrid); },
        removeIngredient(state, action) { if(state.ingredients.length > 1) state.ingredients.splice(action.payload, 1); },
        setIngredient(state, action) { state.ingredients[action.payload.id].ingredient = action.payload.data },
        setIngredientId(state, action) { state.ingredients[action.payload.id].ingredientId = action.payload.dataId; state.ingredients[action.payload.id].thumb = action.payload.dataThb; },
        setCount(state, action) { state.ingredients[action.payload.id].count = action.payload.data },
        setType(state, action) { state.ingredients[action.payload.id].type = action.payload.data },
        toggleTypeOpen(state, action) { state.ingredients[action.payload].setTypeOpen = !(state.ingredients[action.payload].setTypeOpen) },
        setClueOpen(state, action) { state.ingredients[action.payload.id].setCluesOpen = action.payload.data },
        toggleCategoryOpen(state) { state.setCategoryOpen = !(state.setCategoryOpen) },
        toggleCookTimeOpen(state) { state.setCookTimeOpen = !(state.setCookTimeOpen) },
        setInstructions(state, action) { state.instruction = action.payload; },
        delAll(state) { return init; }
    },
})

export const newRecipeReducer = newRecipeSlice.reducer;
export const { delAll, setIngredientId, setImg, setInstructions, setTitle, setDescr, setCategory, setCookTime, addIngredient, removeIngredient, setIngredient, setCount, setType, toggleTypeOpen, toggleCategoryOpen, toggleCookTimeOpen, setClueOpen } = newRecipeSlice.actions;
export const selectNewRecipe = (state: RootState) => state.newRecipe;
