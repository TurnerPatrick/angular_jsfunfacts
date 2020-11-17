import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbacksComponent } from './callbacks/callbacks.component';
import { HigherLevelFunctionComponent } from './higher-level-function/higher-level-function.component';
import { HomeComponent } from './home/home.component';
import { JsCreatorComponent } from './js-creator/js-creator.component';
import { PromisesComponent } from './promises/promises.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  { 
    path: 'promises',
    component: PromisesComponent
  },
    {
      path: 'jsCreator',
      component: JsCreatorComponent
    },
  {
    path: 'callbacks',
    component: CallbacksComponent
  },
  {
    path: 'higher-level-function',
    component: HigherLevelFunctionComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
