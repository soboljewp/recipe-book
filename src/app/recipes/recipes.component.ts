import { Component, OnInit } from '@angular/core';
import { Recipe } from "./recipe";
import { RecipeService } from "./recipe.service";
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
  selector: 'rb-recipes',
  templateUrl: 'recipes.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class RecipesComponent {

}
