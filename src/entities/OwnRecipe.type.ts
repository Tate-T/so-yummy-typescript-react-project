export type DelRecipe = {
    message: string;
}
export type PostRecipe = {
    message: string;
    id: string;
}
type Ingredient = {
    id: string,
    measure: string
}
export type OwnRecipe = {
    title: string,
    category: string,
    description: string,
    instructions: string[],
    ingredients: Ingredient[],
    time: string,
    fullimage: File | null,
}