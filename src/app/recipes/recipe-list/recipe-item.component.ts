import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe'
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
  selector: 'rb-recipe-item',
  templateUrl: 'recipe-item.component.html',
  styles: [],
  directives: [ROUTER_DIRECTIVES]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() recipeId: number;

  constructor() { }

  ngOnInit() {
  }
}
