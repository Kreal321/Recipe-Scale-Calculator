import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RecipeBook } from "../models/recipeBook.model";
import {Recipe} from "../models/recipe.model";
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeCache} from "../models/recipeCache.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  getRecipe(name: string | null): Observable<RecipeBook> {
    return this.http.get<RecipeBook>('./assets/recipes/' + name + '.json');
  }

  private getOrCreateRecipeCache(): RecipeCache {
    const recipeStr: string | null = localStorage.getItem(this.route.snapshot.paramMap.get('name')!);
    let recipes: RecipeCache = {} as RecipeCache;
    if (recipeStr) {
      recipes = JSON.parse(recipeStr);
    }
    return recipes;
  }

  saveRecipeCache(key: string, recipe: Recipe): void {
    let recipes: RecipeCache = this.getOrCreateRecipeCache();
    recipes[key] = recipe;
    localStorage.setItem(this.route.snapshot.paramMap.get('name')!, JSON.stringify(recipes));
  }

  removeRecipeCache(key: string): void {
    let recipes: RecipeCache = this.getOrCreateRecipeCache();
    delete recipes[key];
    localStorage.setItem(this.route.snapshot.paramMap.get('name')!, JSON.stringify(recipes));
  }

  getRecipeCache(key: string): Recipe | null {
    let recipes: RecipeCache = this.getOrCreateRecipeCache();
    return recipes[key];
  }

  getRecipeCacheKeys(): string[] {
    let recipes: RecipeCache = this.getOrCreateRecipeCache();
    return Object.keys(recipes);
  }

}
