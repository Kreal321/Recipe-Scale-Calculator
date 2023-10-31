import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {UnitType} from "../../../../core/enums/unitType.enum";
import {UnitConverter} from "../../../../core/utils/unitConverter";

import Swal from 'sweetalert2'

@Component({
  selector: 'app-weight-unit',
  templateUrl: './weight-unit.component.html',
  styleUrls: ['./weight-unit.component.scss']
})
export class WeightUnitComponent implements OnChanges{

  @Input() weight: number | undefined;
  @Input() unit: UnitType | undefined;
  @Input() targetUnit: UnitType | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.targetUnit) {
      this.changeToTargetUnit(this.targetUnit!);
    } else {
      this.unitAutoConvert();
    }
  }

  unitAutoConvert() {
    if (!UnitConverter.isMetric(this.unit!) || this.unit == UnitType.MCG) return;

    while (this.weight && Math.abs(this.weight) < 0.01 && this.unit != UnitType.MCG) {
      this.weight *= 1000;
      this.unit = UnitConverter.metricUnitPrev(this.unit!);
    }
  }

  changeToTargetUnit(targetUnit: UnitType) {
    this.weight = UnitConverter.convertWeight(this.weight!, this.unit!, targetUnit);
    this.unit = targetUnit;
  }

  changeUnit() {
    Swal.fire({
      title: 'Recipe Book Not Found',
      text: 'Please input the correct recipe book name',
      icon: 'error',
    }).then(() => {

    })
  }

}
