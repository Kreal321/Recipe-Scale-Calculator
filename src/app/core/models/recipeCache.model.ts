import {Recipe} from "./recipe.model";

export interface RecipeCache {
  [name: string] : Recipe;
}
