import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RecipeBook } from "../models/recipeBook.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    private http: HttpClient
  ) { }

  getRecipe(name: string | null): Observable<RecipeBook> {
    return this.http.get<RecipeBook>('./assets/recipes/' + name + '.json');
  }

}
