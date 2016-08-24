import { Injectable } from '@angular/core';
import { Recipe } from "./recipe";
import { Ingredient } from "../shared";

@Injectable()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Mit Spätzle', 'http://www.gutekueche.at/img/rezept_art/193/schnitzel-rezepte.jpg', [
      new Ingredient('French fries', 2),
      new Ingredient('Pork meat', 1)
    ]),
    new Recipe('Salat', 'mit frischen Tomaten', 'http://piccobello-pizza.de/wp-content/uploads/2015/11/Gemischter-Salat.jpg', [])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }
}
