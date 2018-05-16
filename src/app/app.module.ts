import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { App }                  from './counter';
import { MessageService }       from './message.service';
import { RecipiesComponent }    from './recipies/recipies.component';
import { RecipeService }        from './recipe.service';
import { TipsService }        from './tips.service';

import { AppRoutingModule }     from './app-routing.module';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { RecipeSearchComponent } from './recipe-search/recipe-search.component';

import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { HeaderComponent } from './header/header.component';
import { OverOnsComponent } from './over-ons/over-ons.component';
import { TipsTricksComponent } from './tips-tricks/tips-tricks.component';
import { TipstricksDetailComponent } from './tipstricks-detail/tipstricks-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    Angular2FontawesomeModule
  ],
  declarations: [
    AppComponent,
    App,
    RecipiesComponent,
    RecipeSearchComponent,
    RecipeDetailComponent,
    HeaderComponent,
    OverOnsComponent,
    TipsTricksComponent,
    TipstricksDetailComponent
  ],

  providers: [ MessageService, RecipeService, TipsService ],
  bootstrap: [ AppComponent ]
  
})
export class AppModule { }

