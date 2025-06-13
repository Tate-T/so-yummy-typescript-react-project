'use client'
import RecipeHero from '@/widgets/Recipes/RecipeHero/RecipeHeroo'
import RecipeList from '@/widgets/Recipes/ListItem/ListItem'
import Header from '@/shared/Header/Header'
export default function Recipe() {
	return (
		<>
			<Header />
			<RecipeHero />
			<RecipeList />
		</>
	)
}
