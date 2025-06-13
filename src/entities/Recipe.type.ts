import { ingredient } from './Ingridient.type'

export type RecipeSmall = {
	_id: string
	title: string
	category: string
	description: string
	preview: string
	time: string
	popularity: number
	like: boolean
	favorite: boolean
}

export type Recipes = {
	recipes: RecipeSmall[]
	total: number
	page: number
	limit: number
	sort: string
}

export type RecipeItem = {
	_id: string
	title: string
	category: string
	description: string
	instructions: string
	ingridients: ingredient[]
	time: string
	popularity: number
	favorite: boolean
	like: boolean
	previewImg: string
	fullImage: string
	area: string
	tags: string[]
}
