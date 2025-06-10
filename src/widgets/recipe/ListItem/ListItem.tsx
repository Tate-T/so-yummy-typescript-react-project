'use client'
import css from './ListItem.module.scss'
import Image from 'next/image'
import photHeader from '../../../../public/recipe/salat.png'
import photoTest from '../../../../public/recipe/image.png'
import { useState } from 'react'
export default function RecipeList() {
	const CustomCheckbox = () => {
		const [checked, setChecked] = useState(false)

		return (
			<label className={css.wrapper}>
				<input
					type="checkbox"
					checked={checked}
					onChange={() => setChecked(!checked)}
					className={css.input}
				/>
				<span className={css.box}>
					{checked && (
						<svg
							width="37"
							height="37"
							viewBox="0 0 37 37"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								x="1"
								y="1"
								width="35"
								height="35"
								rx="6"
								stroke="#7E7E7E"
								strokeOpacity="0.5"
								strokeWidth="2"
								fill="#f3f8db"
							/>
							<path
								d="M11 19L17 25L27 13"
								stroke="#8BAA36"
								strokeWidth="3"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					)}
					{!checked && (
						<svg
							width="37"
							height="37"
							viewBox="0 0 37 37"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								x="1"
								y="1"
								width="35"
								height="35"
								rx="6"
								stroke="#7E7E7E"
								strokeOpacity="0.5"
								strokeWidth="2"
								fill="#f3f8db"
							/>
						</svg>
					)}
				</span>
			</label>
		)
	}

	return (
		<section className={css.section}>
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
						<Image alt="awd" className={css.photoItem} src={photHeader} />{' '}
						<p>Salmon</p>{' '}
						<div className={css.boxcheck}>
							<div className={css.boxGrama}>
								<p>400 g</p>
							</div>
							<CustomCheckbox></CustomCheckbox>
						</div>
					</li>
					<li className={css.itemIngr}>
						<Image alt="awd" className={css.photoItem} src={photoTest} />{' '}
						<p>khgcyutgvkgv</p>{' '}
						<div className={css.boxcheck}>
							<div className={css.boxGrama}>
								<p>400 g</p>
							</div>
							<CustomCheckbox></CustomCheckbox>
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
							Heat a non-stick pan. Add the salmon and fry for 3–4 mins on each
							side until crisp but still moist inside.
						</li>
						<li>
							Put a salmon fillet on top of each salad and drizzle over the
							remaining dressing. Serve warm.
						</li>
					</ol>
				</div>
				<Image className={css.salatImg} src={photHeader} alt="awd" />
			</div>
		</section>
	)
}
