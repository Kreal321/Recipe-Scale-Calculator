import {UnitType} from "../enums/unitType.enum";
import {IngredientResult} from "./ingredientResult.model";

export interface Calculation {
  unit: UnitType,
  totalWeight: number,
  totalPrice: number,
  ingredients: IngredientResult[]
}
