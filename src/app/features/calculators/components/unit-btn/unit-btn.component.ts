import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UnitType} from "../../../../core/enums/unitType.enum";

@Component({
  selector: 'app-unit-btn',
  templateUrl: './unit-btn.component.html',
  styleUrls: ['./unit-btn.component.scss']
})
export class UnitBtnComponent {

  @Input() unit: UnitType | undefined;
  @Output() unitChange: EventEmitter<UnitType> = new EventEmitter<UnitType>();
  @Output() valueHasChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  units: UnitType[] = [UnitType.G, UnitType.KG, UnitType.OZ, UnitType.LB];

  changeUnit(unit: UnitType) {
    this.unitChange.emit(unit);
    this.valueHasChanged.emit(true);
  }
}
