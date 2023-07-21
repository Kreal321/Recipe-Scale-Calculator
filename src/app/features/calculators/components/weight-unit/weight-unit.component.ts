import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {UnitType} from "../../../../core/enums/unitType.enum";
import {UnitConverter} from "../../../../core/utils/unitConverter";

@Component({
  selector: 'app-weight-unit',
  templateUrl: './weight-unit.component.html',
  styleUrls: ['./weight-unit.component.scss']
})
export class WeightUnitComponent implements OnChanges{

  @Input() weight: number | undefined;
  @Input() unit: UnitType | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    this.unitAutoConvert();
  }

  unitAutoConvert() {
    if (!UnitConverter.isMetric(this.unit!) || this.unit == UnitType.MCG) return;

    while (this.weight && Math.abs(this.weight) < 0.01 && this.unit != UnitType.MCG) {
      this.weight *= 1000;
      this.unit = UnitConverter.metricUnitPrev(this.unit!);
    }
  }

}
