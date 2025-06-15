import Image from 'next/image';
import css from './BigRecipeItem.module.scss';
import { delNewOwnRecipe, selectMyRecipsById } from '@/redux/slices/ownRecipesSave';
import { useDispatch, useSelector } from 'react-redux';


export default ({src, title, descr, time, id, setPage, toggleFunc, moreBlack}: {src: string, title: string, descr: string, time: number, id: string, setPage: (page: number) => void, toggleFunc: (id: string) => void, moreBlack: boolean}) => {
    const recipe = useSelector((state) => selectMyRecipsById(state, id));
    const dispatch = useDispatch();
    return (<li className={css.bigRecipeItem}>
        <div className={css.recipePhoto}>
            <Image fill className={css.image} src={src} alt="Recipe photo" />
        </div>
        <div className={css.infoCont}>
            <h4 className={css.recipeTitle}>{title}</h4>
            <p className={css.recipeDescr}>{descr}</p>
            <p className={css.recipeTime}>{Math.floor(time/60)>0 ? `${Math.floor(time/60)} hour` : ''} {time-Math.floor(time/60)*60>0 ? `${time-Math.floor(time/60)*60} min` : ''}</p>
        </div>
        <button type='button' className={css.delBut} onClick={() => (toggleFunc(id), setPage(1), dispatch(delNewOwnRecipe(id)))}></button>
        <button onClick={() => console.log(recipe)} type='button' className={moreBlack ? css.seeButB : css.seeButG}>See recipe</button>
    </li>);
} 