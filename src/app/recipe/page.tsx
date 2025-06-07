'use client'
import css from './recipe.module.scss'
import Image from 'next/image'
import photHeader from '../../../public/recipe/salat.png'
// import photoTest from '../../../public/recipe/gifka.gif'
import RecipeHero from '@/widgets/recipe/recipeHero'
import Container from '@/shared/Container/Container'
export default function Recipe() {
	return (
		<section className={css.section}>
			<Container>
				
<RecipeHero></RecipeHero>
				<div className={css.greeBox}>
					<div className={css.greeBoxList}>
						<div>
							<p className={css.greeTxt}>Ingredients</p>
						</div>
						<div className={css.secondTxtGree}>
							<p className={css.greeTxt}> Number</p>
							<p className={css.greeTxt}>Add to list</p>
						</div>
					</div>
					<ul className={css.listItem}>
						<li className={css.itemIngr}>
							<Image className={css.photoItem} src={photHeader} /> <p>Salmon</p>{' '}
							<div className={css.boxGrama}>
								<p>400 g</p>
								<div className={css.checkboxWrapper}>
  <span className={css.checkbox}>
    <input type="checkbox" />
    <svg>
      {/* <use xlink:href="#checkbox-30" class="checkbox"></use> */}
    </svg>
  </span>
  {/* style="display:none" */}
  <svg xmlns="http://www.w3.org/2000/svg" >
    <symbol id="checkbox-30" viewBox="0 0 22 22">
      <path fill="none" stroke="currentColor" d="M5.5,11.3L9,14.8L20.2,3.3l0,0c-0.5-1-1.5-1.8-2.7-1.8h-13c-1.7,0-3,1.3-3,3v13c0,1.7,1.3,3,3,3h13 c1.7,0,3-1.3,3-3v-13c0-0.4-0.1-0.8-0.3-1.2"/>
    </symbol>
  </svg>
</div>
							</div>
						</li>
					</ul>
				</div>

				<div className={css.preparationBox}>
					<div className={css.preparation}>
						<h2 className={css.title}>Recipe Preparation</h2>
						<ol className={css.list}>
							<li>Season the salmon, then rub with oil.</li>
							<li>Mix the dressing ingredients together.</li>
							<li>
								Halve, stone, peel and slice the avocados. Halve and quarter the
								cucumber lengthways, then cut into slices.
							</li>
							<li>
								Divide salad, avocado and cucumber between four plates, then
								drizzle with half the dressing.
							</li>
							<li>
								Heat a non-stick pan. Add the salmon and fry for 3–4 mins on
								each side until crisp but still moist inside.
							</li>
							<li>
								Put a salmon fillet on top of each salad and drizzle over the
								remaining dressing. Serve warm.
							</li>
						</ol>
					</div>
					<Image className={css.salatImg} src={photHeader} alt="awd" />
				</div>
			</Container>
		</section>
	)
}
