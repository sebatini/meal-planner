export interface Ingredient {
  ingredientId: number;
  recipeId: number;
  ingredientName?: string | null;
  measurement?: string | null;
}
