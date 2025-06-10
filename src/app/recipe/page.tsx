'use client'
import css from './recipe.module.scss'
// import Image from 'next/image'
// import photHeader from '../../../public/recipe/salat.png'
// import photoTest from '../../../public/recipe/image.png'
import RecipeHero from '@/widgets/recipe/RecipeHero/recipeHero'
import RecipeList from '@/widgets/recipe/ListItem/ListItem'
import Container from '@/shared/Container/Container'
// import { useState } from 'react'
export default function Recipe() {
	return (
		<section className={css.section}>
			<Container>
				<RecipeHero></RecipeHero>
				<RecipeList></RecipeList>
			</Container>
		</section>
	)
}
