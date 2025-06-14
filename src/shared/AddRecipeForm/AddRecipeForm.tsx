'use client';
import { useGetAllCategories } from '@/redux/apis/categoriesApi';
import css from './addRecipeForm.module.scss';
import { addIngredient, removeIngredient, selectNewRecipe, setCategory, setCookTime, setCount, setDescr, setIngredient, setTitle, setType, toggleCategoryOpen, setClueOpen, toggleCookTimeOpen, toggleTypeOpen, setInstructions, setImg, setIngredientId, delAll } from '@/redux/slices/newRecipe';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetIngredients } from '@/redux/apis/ingridientsApi';
import { usePostOwnRecipe } from '@/redux/apis/myRecipesApi';
import Image from 'next/image';

const base64ToFile = (base64: string, filename: string, mime: string): File => {
  const arr = base64.split(',');
  const mimeMatch = arr[0].match(/:(.*?);/);
  const mimeType = mimeMatch?.[1] ?? mime;
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mimeType });
}


export default () => {
    const { data: catgs } = useGetAllCategories();
    const { data: clues } = useGetIngredients();
    const [postRecipe] = usePostOwnRecipe();
    const [imgBin, setImgBin] = useState<File | null>(null);
    const categories: string[] = useMemo(() => catgs?.map(catg => catg.title) ?? [], [catgs]);
    const ingredientsClues: {ttl: string, id: string}[] = useMemo(() => (clues?.ingredients?.map(ingredClue => ({ttl: ingredClue.ttl, id: ingredClue._id})) ?? []).sort((a, b) => a.ttl.localeCompare(b.ttl)), [clues]);
    const times: number[] = Array.from({ length: 48 }, (_, i)=>(i+1)*5);
    const placeholderClue = useMemo(() => ingredientsClues[Math.floor(Math.random() * ingredientsClues.length)]?.ttl, [ingredientsClues]);
    const placeholderCount = useMemo(() => String(Math.floor(Math.random() * 10) + 1), []);
    const recipe = useSelector(selectNewRecipe);
    console.log(recipe.ingredients[0])
    useEffect(() => {
        if(recipe.img) setImgBin(base64ToFile(recipe.img, 'restored.jpg', 'image/jpeg'))
    }, []);
    const submitRecipe = async() => {
        const newIngr = recipe.ingredients.map((ingre: { ingredient: string, ingredientId: string, count: number, type: string, setTypeOpen: boolean, setCluesOpen: boolean }) => ({
            id: ingre.ingredientId,
            measure: `${ingre.count}${ingre.type}`
        }));
        try{
            const res = await postRecipe({
                title: recipe.title,
                category: recipe.category,
                description: recipe.descr,
                instructions: recipe.instruction.split('\n'),
                ingredients: newIngr,
                time: recipe.cookTime,
                fullimage: imgBin,
            }).unwrap();
        } catch(err: any){
            alert(`ERROR: ${err.data.message}`);
        }
    }
    const dispatch = useDispatch();
    return (<section className={css.addRecipe}>
        <div className={css.basicInfoCont}>
            <div className={css.photoInput}>
                <Image fill alt="Preview" id="preview" className={`${css.preview} ${recipe.img ? '' : css.errImg}`} src={recipe.img || '/addForm/prev.png'} />
                <input className={css.fileInput} type="file" accept=".jpg,.jpeg,.png,.webp,.gif" onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                    const file = evt.target.files?.[0];
                    if (!file) return;
                    const reader = new FileReader();
                    reader.onload = (e: ProgressEvent<FileReader>) => dispatch(setImg(e.target?.result ?? ''));
                    reader.readAsDataURL(file);
                    setImgBin(file);
                }}/>
            </div>
            <div className={css.basicInputs}>
                <input maxLength={200} className={`${css.basicInput} ${recipe.title.trim().length < 2 ? css.errBottom : ''}`} value={recipe.title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setTitle(e.target.value))} type="text" placeholder='Enter item title'/>
                <input maxLength={600} className={`${css.basicInput} ${recipe.descr.trim().length < 2 ? css.errBottom : ''}`} value={recipe.descr} onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setDescr(e.target.value))} required type="text" placeholder='Enter about recipe'/>
                <div className={css.basicSelectInput}>
                    <p>Category</p>
                    <button className={css.selectBut} onClick={() => dispatch(toggleCategoryOpen())}>{recipe.category}</button>
                    {recipe.setCategoryOpen && <div id="categories" className={css.selectorScr}><ul className={css.selectors}>{categories.map((category: string) => <li onClick={() => (dispatch(setCategory(category)),dispatch(toggleCategoryOpen()))} className={css.selector} key={category}>
                        {category}
                    </li>)}</ul></div>}
                </div>
                <div className={css.basicSelectInput}>
                    <p>Cooking time</p>
                    <button className={css.selectBut} onClick={() => dispatch(toggleCookTimeOpen())}>{recipe.cookTime} min</button>
                    {recipe.setCookTimeOpen && <div id="times" className={css.selectorScr}><ul className={css.selectors}>{times.map((time: number) => <li onClick={() => (dispatch(setCookTime(time)),dispatch(toggleCookTimeOpen()))} className={css.selector} key={time}>
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
                    <input placeholder={placeholderClue} className={`${css.ingredientInput} ${ingredient.ingredientId === '' ? css.errInp : ''}`} value={ingredient.ingredient} onChange={(e: React.ChangeEvent<HTMLInputElement>) => (dispatch(setIngredient({id: idx, data: e.target.value})),dispatch(setClueOpen({id: idx, data: true})),dispatch(setIngredientId({id: idx, data: ingredientsClues.find((ingredientClue: {ttl: string, id: string}) => ingredientClue.ttl.trim().toLowerCase() === e.target.value.trim().toLowerCase()) ? ingredientsClues.find((ingredientClue: {ttl: string, id: string}) => ingredientClue.ttl.trim().toLowerCase() === e.target.value.trim().toLowerCase())?.id : ''})))}/>
                    <button onClick={() => (dispatch(setClueOpen({id: idx, data: !(ingredient.setCluesOpen)})), dispatch(setIngredientId({id: idx, data: ingredientsClues.find((ingredientClue: {ttl: string, id: string}) => ingredientClue.ttl.trim().toLowerCase() === ingredient.ingredient.trim().toLowerCase()) ? ingredientsClues.find((ingredientClue: {ttl: string, id: string}) => ingredientClue.ttl.trim().toLowerCase() === ingredient.ingredient.trim().toLowerCase())?.id : ''})))} className={css.openClues} />
                    {(ingredient.setCluesOpen && ingredientsClues.filter((ingredientClue: {ttl: string, id: string}) => ingredientClue.ttl.trim().toLowerCase().includes(ingredient.ingredient.trim().toLowerCase())).length > 0) && <div className={css.cluesWrap}><ul className={css.clues}>{ingredientsClues.filter((ingredientClue: {ttl: string, id: string}) => ingredientClue.ttl.trim().toLowerCase().includes(ingredient.ingredient.trim().toLowerCase())).map((ingredientClue: {ttl: string, id: string}) => <li className={css.clue} onClick={() => (dispatch(setIngredient({id: idx, data: ingredientClue.ttl})), dispatch(setClueOpen({id: idx, data: false})), dispatch(setIngredientId({id: idx, data: ingredientClue.id})))} key={ingredientClue.id}>{ingredientClue.ttl}</li>)}</ul></div>}
                </div>
                <div className={`${css.countCont} ${ingredient.count ? '' : css.errCount}`}>
                    <input placeholder={placeholderCount} type='number' className={css.countInput} value={ingredient.count===0 ? '' : ingredient.count} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {if(Number(e.target.value)<=999) dispatch(setCount({id: idx, data: e.target.value}))}} />
                    <button className={css.selectType} onClick={() => dispatch(toggleTypeOpen(idx))}>{ingredient.type}</button>
                    {ingredient.setTypeOpen && <ul id={`types${idx}`} className={css.types}>{['tbs','tsp','kg','g'].map((type: string) => <li onClick={() => (dispatch(setType({id: idx, data: type})), dispatch(toggleTypeOpen(idx)))} className={css.type} key={type}>{type}</li>)}</ul>}
                </div>
                <button className={css.delIngredientBut} onClick={() => dispatch(removeIngredient(idx))}></button>
            </li>))}</ul>
        </div>
        <div className={css.instructions}>
            <h3 className={css.subTitle}>Recipe Preparation</h3>
            <textarea maxLength={2000} className={`${css.textInput} ${recipe.instruction.trim().length < 2 ? css.errTextarea : ''}`} placeholder='Enter recipe' value={recipe.instruction} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => dispatch(setInstructions(e.target.value))} />
        </div>
        <button className={css.addBut} onClick={() => {
            if(recipe.ingredients.filter(ingr => ingr.ingredientId  === '' || ingr.count === 0).length === 0 && recipe.img && recipe.instruction.trim().length >= 2 && recipe.title.trim().length >= 2 && recipe.descr.trim().length >= 2) {
                submitRecipe();
                dispatch(delAll());
            } else {
                alert('CHECK ALL INPUTS!');
            }
        }}>Add</button>
    </section>)
}