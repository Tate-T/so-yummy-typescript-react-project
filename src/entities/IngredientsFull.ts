export type IngredientFull = {
    _id: string;
    ttl: string;
    desc: string;
    thb: string;
};
export type IngredientsFull = {
    ingredients: IngredientFull[];
}