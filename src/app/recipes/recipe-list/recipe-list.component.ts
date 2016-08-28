import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe";
import { RecipeService } from "../recipe.service";
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
