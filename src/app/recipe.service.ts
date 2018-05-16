import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Recipe } from './recipe';
import { RECIPIES } from './mock-recipies';
import { MessageService } from './message.service';

import { Tips } from './tips';
import { TIPSTRICKS } from './mock-tips';

@Injectable()
export class RecipeService {

  constructor(private messageService: MessageService) { }

  getRecipies(): Observable<Recipe[]> {
    // Todo: send the message after fetching the heroes
    this.messageService.add('RecipeService: fetched recipies');
    return of(RECIPIES);
  }



  searchRecipies(searchterm): Observable<Recipe[]> {
    console.log("in service search")
      // Todo: send the message after fetching the heroes
    this.messageService.add('RecipeService: fetched recipies');

    var lijst1 = RECIPIES.filter(recipe => recipe.name.toLowerCase().includes(searchterm.toLowerCase()));
    var lijst2 = RECIPIES.filter(recipe => recipe.soort.toLowerCase().includes(searchterm.toLowerCase()));

    return of(lijst1);
    
  }


  getRecipe(id: number): Observable<Recipe> {
    // Todo: send the message after fetching the hero
    this.messageService.add(`RecipeService: fetched recipe id=${id}`);
    return of(RECIPIES.find(recipe => recipe.id === id));
  }
}
