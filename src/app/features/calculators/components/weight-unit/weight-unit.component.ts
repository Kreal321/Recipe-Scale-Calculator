import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {UnitType} from "../../../../core/enums/unitType.enum";

import Swal from 'sweetalert2'
import {WeightConverter} from "../../../../core/utils/unitConverters";

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
    }
  }

  changeToTargetUnit(targetUnit: UnitType) {
    this.weight = WeightConverter.convert(this.weight!).from(this.unit!).to(targetUnit);
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
