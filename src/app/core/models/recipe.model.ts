import { Ingredient } from "./ingredient.model";
import {UnitType} from "../enums/unitType.enum";

export interface Recipe {
  title: string,
  unit: UnitType,
  ingredients: Ingredient[]
}
