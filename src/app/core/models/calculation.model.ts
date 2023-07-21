import {UnitType} from "../enums/unitType.enum";

export interface Calculation {
  weightUnit: UnitType,
  totalWeight: number,
  totalPrice: number,
}
