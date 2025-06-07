'use client'
import css from './recipeHero.module.scss'
// import Image from 'next/image'
// import photHeader from '../../../public/recipe/salat.png'
// import photoTest from '../../../public/recipe/gifka.gif'
import Container from '@/shared/Container/Container'
export default function RecipeHero() {
	return (
		<section className={css.section}>
			<Container>
				{/* <Image src={photHeader} alt='awd'/> */}
				<div className={css.recipeHeader}>
					<h1 className={css.title}>Salmon Avocado Salad</h1>
					<p className={css.pidTitle}>
						Is a healthy salad recipe that’s big on nutrients and flavor. A
						moist, pan seared salmon is layered on top of spinach, avocado,
						tomatoes, and red onions. Then drizzled with a homemade lemon
						vinaigrette.
					</p>
					<button className={css.titleButton}>Add to favorite recipes</button>
					<div className={css.timeBox}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
						>
							<g clip-path="url(#clip0_264_738)">
								<path
									d="M9.99996 18.3334C14.6023 18.3334 18.3333 14.6024 18.3333 10C18.3333 5.39765 14.6023 1.66669 9.99996 1.66669C5.39759 1.66669 1.66663 5.39765 1.66663 10C1.66663 14.6024 5.39759 18.3334 9.99996 18.3334Z"
									stroke="#23262A"
									stroke-width="1.8"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M10 5V10L13.3333 11.6667"
									stroke="#23262A"
									stroke-width="1.8"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</g>
							<defs>
								<clipPath id="clip0_264_738">
									<rect width="20" height="20" fill="white" />
								</clipPath>
							</defs>
						</svg>
						<p>20 min</p>
					</div>
				</div>
			</Container>
		</section>
	)
}
