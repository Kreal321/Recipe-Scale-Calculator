import { UnitType } from "../enums/unitType.enum";

export type MetricUnits = UnitType.MCG | UnitType.MG | UnitType.G | UnitType.KG;
export type ImperialUnits = UnitType.OZ | UnitType.LB;
export type Units = MetricUnits | ImperialUnits;

interface Measure {
  systems: Record<string, Record<string, number>>;
  anchors: Record<string, Record<string, Record<string, number>>>;
}

const metric: Record<MetricUnits, number> = {
  MCG: 1 / 1000000,
  MG: 1 / 1000,
  G: 1,
  KG: 1000
}

const imperial: Record<ImperialUnits, number> = {
  OZ: 1,
  LB: 16
}

const measure: Measure = {
  systems: {
    metric,
    imperial
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 28.3495,
      }
    },
    imperial: {
      metric: {
        ratio: 1 / 28.3495
      }
    }
  }
}

export class WeightConverter {
  private readonly value: number;
  private originalUnit: Units | null = null;
  private destinationUnit: Units | null = null;

  static convert(value: number): WeightConverter {
    return new WeightConverter(value);
  }

  constructor(value: number) {
    this.value = value;
  }

  from(unit: Units): this {
    this.originalUnit = unit;
    return this;
  }

  to(unit: Units): number {
    if (this.originalUnit === null) {
      throw new Error("You must specify the original unit");
    }

    this.destinationUnit = unit;

    return this.value * this.getRatio();
  }

  private getSystem(unit: Units): "metric" | "imperial" {
    return (unit as MetricUnits) in metric ? "metric" : "imperial";
  }

  private getRatio(): number {
    const originalSystem = this.getSystem(this.originalUnit!);
    const destinationSystem = this.getSystem(this.destinationUnit!);

    if (originalSystem === destinationSystem) {
      return measure.systems[originalSystem][this.originalUnit as Units] / measure.systems[destinationSystem][this.destinationUnit as Units];
    }

    return measure.systems[originalSystem][this.originalUnit as Units] / measure.systems[destinationSystem][this.destinationUnit as Units] / measure.anchors[originalSystem][destinationSystem]["ratio"];
  }
}
