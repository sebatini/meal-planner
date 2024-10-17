import { Ingredient } from "./Ingredient";

export interface Recipe {
  recipeId: number;
  recipeName: string;
  directions?: string | null;
  createdDate?: Date | null;
  updatedDate?: Date | null;
  ingredients: Ingredient[];
}
