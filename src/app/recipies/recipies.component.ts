import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {
  recipies: Recipe[];
  
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipies();
  }

  getRecipies(): void {
    this.recipeService.getRecipies()
    .subscribe(recipies => this.recipies = recipies);
  }

  onSelect(recipe: Recipe): void {
  	this.selectedRecipe = recipe;
  }
}