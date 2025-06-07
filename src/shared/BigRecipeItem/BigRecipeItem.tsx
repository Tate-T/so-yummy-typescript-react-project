import css from './BigRecipeItem.module.scss';


export default ({src, title, descr, time, id, setPage, toggleFunc, moreBlack}: {src: string, title: string, descr: string, time: number, id: string, setPage: (page: number) => void, toggleFunc: (id: string) => void, moreBlack: boolean}) => {
    return (<li className={css.bigRecipeItem}>
        <img className={css.recipePhoto} src={src} alt='Recipe photo' />
        <div className={css.infoCont}>
            <h4 className={css.recipeTitle}>{title}</h4>
            <p className={css.recipeDescr}>{descr}</p>
            <p className={css.recipeTime}>{Math.floor(time/60)>0 ? `${Math.floor(time/60)} hour` : ''} {time-Math.floor(time/60)*60>0 ? `${time-Math.floor(time/60)*60} min` : ''}</p>
        </div>
        <button type='button' className={css.delBut} onClick={() => (toggleFunc(id), setPage(1))}></button>
        <button type='button' className={moreBlack ? css.seeButB : css.seeButG}>See recipe</button>
    </li>);
} 