import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RecipeBook} from "../../../../core/models/recipeBook.model";
import {Calculation} from "../../../../core/models/calculation.model";
import {RecipeService} from "../../../../core/services/recipe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Recipe} from "../../../../core/models/recipe.model";
import {Ingredient} from "../../../../core/models/ingredient.model";
import Swal from "sweetalert2";

@Component({
  selector: 'app-calculation-history',
  templateUrl: './calculation-history.component.html',
  styleUrls: ['./calculation-history.component.scss']
})
export class CalculationHistoryComponent {

  @Input() recipe: Recipe | undefined;
  @Output() recipeChange: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  caches: string[] = [];
  currentCache: string = '';
  newCacheName: string = '';

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.caches = this.recipeService.getRecipeCacheKeys();
  }

  loadRecipeCache(key: string): void {
    this.recipeChange.emit(this.recipeService.getRecipeCache(key)!);
    this.currentCache = key;
  }

  saveRecipeCache(): void {
    let key: string = this.newCacheName;
    if (key === '') {
      Swal.fire({
        title: 'Name Required',
        text: 'Please input a name for the history',
        icon: 'error',
      })
      return;
    }
    this.recipeService.saveRecipeCache(key, this.recipe!);
    this.caches = this.recipeService.getRecipeCacheKeys();
    this.loadRecipeCache(key);
  }

  removeRecipeCache(key: string): void {
    this.recipeService.removeRecipeCache(key);
    this.caches = this.recipeService.getRecipeCacheKeys();
  }

}
