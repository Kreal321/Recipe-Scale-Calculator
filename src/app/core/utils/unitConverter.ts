import {Ingredient} from "../models/ingredient.model";
import {UnitType} from "../enums/unitType.enum";

export class UnitConverter {
  static getConvertedWeight(ingredient: Ingredient, targetUnit: UnitType): number {
    return this.convertWeight(ingredient.weight, ingredient.weightUnit, targetUnit);
  }

  /**
   * Convert weight from one unit to another
   *
   * @param weight
   * @param unit
   * @param targetUnit
   */
  static convertWeight(weight: number, unit: UnitType, targetUnit: UnitType): number {
    switch(targetUnit) {
      case UnitType.G:
        switch(unit) {
          case UnitType.MCG:
            return weight / 1000000;
          case UnitType.MG:
            return weight / 1000;
          case UnitType.G:
            return weight;
          case UnitType.KG:
            return weight * 1000;
          case UnitType.OZ:
            return weight * 28.3495;
          case UnitType.LB:
            return weight * 453.592;
          default:
            console.error(`Ingredient unit change error: unit ${unit} does not supported`);
        }
        break;

      // TODO: add more unit types
      case UnitType.OZ:
        switch(unit) {
          case UnitType.G:
            return weight / 28.35;
          case UnitType.KG:
            return weight * 35.274;
          case UnitType.OZ:
            return weight;
          case UnitType.LB:
            return weight * 16;
          default:
            console.error(`Ingredient unit change error: unit ${unit} does not supported`);
        }
        break;

      case UnitType.MG:
        switch (unit) {
          case UnitType.MCG:
            return weight / 1000;
          case UnitType.MG:
            return weight;
          case UnitType.G:
            return weight * 1000;
          case UnitType.KG:
            return weight * 1000000;
          default:
            console.error(`Ingredient unit change error: unit ${unit} does not supported`)
        }
        break;

      default:
        console.error(`Ingredient unit change error: target unit ${targetUnit} does not supported`);
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
