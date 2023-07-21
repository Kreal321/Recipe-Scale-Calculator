import {UnitType} from "../enums/unitType.enum";

export interface IngredientResult {
  name: string,
  proportion: number,
  weight: number,
  weightUnit: UnitType,
  price: number,
  priceUnit: UnitType,
  weightNeeded: number
}
