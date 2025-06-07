export type RecipeSmall = {
    _id: string;
    title: string;
    category: string;
    description: string;
    preview: string;
    time: string;
    popularity: number;
    like: boolean;
    favorite: boolean;
}

export type Recipes = {
    recipes: RecipeSmall[];
    total: number;
    page: number;
    limit: number;
    sort: string;
}