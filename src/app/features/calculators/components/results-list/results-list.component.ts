import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Calculation} from "../../../../core/models/calculation.model";

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent {

  @Input() calculation: Calculation | undefined

}
