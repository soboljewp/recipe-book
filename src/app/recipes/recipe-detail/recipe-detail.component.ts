import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Recipe } from "../recipe";
import { ShoppingListService } from "../../shopping-list/shopping-list.service";
import { RecipeService } from "../recipe.service";

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  private recipeIndex: number;
  selectedRecipe: Recipe;
  private subscription: Subscription;
  constructor(private  sls: ShoppingListService,
              private router: Router,
              private route: ActivatedRoute,
              private recipesService: RecipeService) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.recipeIndex = params['id'];
      this.selectedRecipe = this.recipesService.getRecipe(this.recipeIndex);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onEdit() {
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

  onDelete() {
    this.recipesService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }

  onAddToShoppingList() {
    console.log("Adding items to shopping list.");
    this.sls.addItems(this.selectedRecipe.ingredients);
  }
}
