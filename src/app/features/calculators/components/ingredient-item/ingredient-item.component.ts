import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Ingredient} from "../../../../core/models/ingredient.model";
import { UnitType } from '../../../../core/enums/unitType.enum';

@Component({
  selector: 'app-ingredient-item',
  templateUrl: './ingredient-item.component.html',
  styleUrls: ['./ingredient-item.component.scss']
})
export class IngredientItemComponent implements OnInit {

  @Input() ingredient: Ingredient | undefined;
  @Output() ingredientChange: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  @Output() valueHasChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() {
    if (this.ingredient && !this.ingredient.priceUnit) {
      this.ingredient.priceUnit = UnitType.G;
    }
  }

  valueChanged(value: any) {
    if (this.ingredient && !this.ingredient.priceUnit) {
      this.ingredient.priceUnit = UnitType.G;
    }
    this.valueHasChanged.emit(true);
  }

}
