'use client';
import css from './addRecipeForm.module.scss';
import { addIngredient, removeIngredient, selectNewRecipe, setCategory, setCookTime, setCount, setDescr, setIngredient, setTitle, setType, toggleCategoryOpen, setClueOpen, toggleCookTimeOpen, toggleTypeOpen } from '@/redux/slices/newRecipe';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default ({}) => {
    const categories: string[] = ['Breakfast', 'Beef', 'Dessert', 'Goat', 'Lamb', 'Miscellaneous', 'Pasta', 'Pork', 'Seafood', 'Vegan', 'Side', 'Starter'];
    const ingredientsClues: string[] = ["Bowtie Pasta", "Chicken", "Asparagus", "Cacao", "Beef Brisket", "Avocado", "Salmon", "Brandy", "Bicarbonate Of Soda", "Tomato", "Basil", "Mozzarella", "Garlic", "Olive Oil", "Lemon", "Onion", "Parmesan", "Mushroom", "Spinach", "Milk", "Egg", "Flour"];
    let times: number[] = []; for (let i=5; i<=240; i+=5) { times.push(i); }
    const placeholderClue = useMemo(() => ingredientsClues[Math.floor(Math.random() * ingredientsClues.length)], []);
    const placeholderCount = useMemo(() => String(Math.floor(Math.random() * 10) + 1), []);
    const recipe = useSelector(selectNewRecipe);
    console.log(recipe)
    const dispatch = useDispatch();
    return (<section className={css.addRecipe}>
        <div className={css.basicInfoCont}>
            <div className={css.photoInput}>
                <input className={css.fileInput} type="file" accept="image/*"/>
            </div>
            <div className={css.basicInputs}>
                <input className={css.basicInput} value={recipe.title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setTitle(e.target.value))} required type="text" placeholder='Enter item title'/>
                <input className={css.basicInput} value={recipe.descr} onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setDescr(e.target.value))} required type="text" placeholder='Enter about title'/>
                <div className={css.basicSelectInput}>
                    <p>Category</p>
                    <button className={css.selectBut} onClick={() => dispatch(toggleCategoryOpen())}>{recipe.category}</button>
                    {recipe.setCategoryOpen && <div id="categories" className={css.selectorScr}><ul className={css.selectors}>{categories.map((category: string) => <li onClick={() => (dispatch(setCategory(category)),dispatch(toggleCategoryOpen()))} className={css.selector}>
                        {category}
                    </li>)}</ul></div>}
                </div>
                <div className={css.basicSelectInput}>
                    <p>Cooking time</p>
                    <button className={css.selectBut} onClick={() => dispatch(toggleCookTimeOpen())}>{recipe.cookTime} min</button>
                    {recipe.setCookTimeOpen && <div id="times" className={css.selectorScr}><ul className={css.selectors}>{times.map((time: number) => <li onClick={() => (dispatch(setCookTime(time)),dispatch(toggleCookTimeOpen()))} className={css.selector}>
                        {time} min
                    </li>)}</ul></div>}
                </div>
            </div>
        </div>
        <div className={css.ingredients}>
            <div className={css.titleCont}>
                <h3 className={css.subTitle}>Ingredients</h3>
                <div className={css.ingredientsCount}>
                    <button data-evt="-" className={css.changeCountBut} onClick={() => dispatch(removeIngredient(recipe.ingredients.length-1))}></button>
                    <p>{recipe.ingredients.length}</p>
                    <button data-evt="+" className={css.changeCountBut} onClick={() => dispatch(addIngredient())}></button>
                </div>
            </div>
            <ul className={css.ingredientsList}>{recipe.ingredients.map((ingredient, idx) => (<li className={css.ingredientItem} key={idx}>
                <div className={css.ingredientInputCont}>
                    <input placeholder={placeholderClue} className={css.ingredientInput} value={ingredient.ingredient} onChange={(e: React.ChangeEvent<HTMLInputElement>) => (dispatch(setIngredient({id: idx, data: e.target.value})),dispatch(setClueOpen({id: idx, data: true})))} />
                    <button onClick={() => dispatch(setClueOpen({id: idx, data: !(ingredient.setCluesOpen)}))} className={css.openClues} />
                    {(ingredient.setCluesOpen && ingredientsClues.filter((ingredientClue: string) => ingredientClue.includes(ingredient.ingredient)).length > 0 && !(ingredientsClues.find((ingredientClue: string) => ingredientClue === ingredient.ingredient))) && <div className={css.cluesWrap}><ul className={css.clues}>{ingredientsClues.filter((ingredientClue: string) => ingredientClue.includes(ingredient.ingredient)).map((ingredientClue: string) => <li className={css.clue} onClick={() => (dispatch(setIngredient({id: idx, data: ingredientClue})), dispatch(setClueOpen({id: idx, data: false})))}>{ingredientClue}</li>)}</ul></div>}
                </div>
                <div className={css.countCont}>
                    <input placeholder={placeholderCount} type='number' className={css.countInput} value={ingredient.count===0 ? '' : ingredient.count} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {if(Number(e.target.value)<=999) dispatch(setCount({id: idx, data: e.target.value}))}} />
                    <button className={css.selectType} onClick={() => dispatch(toggleTypeOpen(idx))}>{ingredient.type}</button>
                    {ingredient.setTypeOpen && <ul id={`types${idx}`} className={css.types}>{['tbs','tsp','kg','g'].map((type: string) => <li onClick={() => (dispatch(setType({id: idx, data: type})), dispatch(toggleTypeOpen(idx)))} className={css.type}>{type}</li>)}</ul>}
                </div>
                <button className={css.delIngredientBut} onClick={() => dispatch(removeIngredient(idx))} />
            </li>))}</ul>
        </div>
        <div className={css.instructions}>
            <h3 className={css.subTitle}>Recipe Preparation</h3>
            <textarea className={css.textInput}>Enter recipe</textarea>
        </div>
        <button>Add</button>
    </section>)
}