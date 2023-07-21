import {Ingredient} from "../models/ingredient.model";
import {UnitType} from "../enums/unitType.enum";

export class UnitConverter {
  static getConvertedWeight(ingredient: Ingredient, targetUnit: UnitType): number {
    switch(targetUnit) {
      case UnitType.G:
        switch(ingredient.weightUnit) {
          case UnitType.G:
            return ingredient.weight;
          case UnitType.KG:
            return ingredient.weight * 1000;
          case UnitType.OZ:
            return ingredient.weight * 28.3495;
          case UnitType.LB:
            return ingredient.weight * 453.592;
          default:
            console.error("ingredient unit change error");
        }
        break;
      case UnitType.OZ:
        switch(ingredient.weightUnit) {
          case UnitType.G:
            return ingredient.weight / 28.35;
          case UnitType.KG:
            return ingredient.weight * 35.274;
          case UnitType.OZ:
            return ingredient.weight;
          case UnitType.LB:
            return ingredient.weight * 16;
          default:
            console.error("ingredient unit change error");
        }
        break;
      default:
        console.error("ingredient unit change error");
        break;
    }
    return 0;
  }

  static isMetric(unit: UnitType): boolean {
    switch(unit) {
      case UnitType.MCG:
      case UnitType.MG:
      case UnitType.G:
      case UnitType.KG:
        return true;
      default:
        return false;
    }
  }

  static metricUnitNext(unit: UnitType): UnitType {
    switch(unit) {
      case UnitType.MCG:
        return UnitType.MG;
      case UnitType.MG:
        return UnitType.G;
      case UnitType.G:
        return UnitType.KG;
      default:
        return unit;
    }
  }

  static metricUnitPrev(unit: UnitType): UnitType {
    switch(unit) {
      case UnitType.KG:
        return UnitType.G;
      case UnitType.G:
        return UnitType.MG;
      case UnitType.MG:
        return UnitType.MCG;
      default:
        return unit;
    }
  }

}
