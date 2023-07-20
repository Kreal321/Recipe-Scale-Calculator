import {Recipe} from "./recipe.model";
import {UnitType} from "../enums/unitType.enum";

export interface RecipeBook {
  title: string,
  description: string,
  recipes: Recipe[]
}
