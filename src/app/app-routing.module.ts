import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipiesComponent }    from './recipies/recipies.component';
import { RecipeDetailComponent }    from './recipe-detail/recipe-detail.component';
import { HeaderComponent }    from './header/header.component';
import { OverOnsComponent }    from './over-ons/over-ons.component';
import { TipsTricksComponent }    from './tips-tricks/tips-tricks.component';
import { TipstricksDetailComponent }    from './tipstricks-detail/tipstricks-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipies', pathMatch: 'full' },
  { path: 'recipies', component: RecipiesComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'recipe-detail/:id', component: RecipeDetailComponent },
  { path: 'over-ons', component: OverOnsComponent },
  { path: 'tips-tricks', component: TipsTricksComponent },
  { path: 'tipstricks-detail/:id', component: TipstricksDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

 