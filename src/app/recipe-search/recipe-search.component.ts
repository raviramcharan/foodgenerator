import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {

  recipies: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
     this.searchRecipies("");
  }

  searchRecipies(searchterm): void {
    this.recipeService.searchRecipies(searchterm)
    .subscribe(recipies => this.recipies = recipies);
  }

  search(searchterm){
  console.log("in search" + searchterm)
  	 this.searchRecipies(searchterm);
  }

}
