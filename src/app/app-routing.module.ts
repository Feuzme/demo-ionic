import { WeatherComponent } from './components/weather/weather.component';
import { TodoComponent } from './components/todo/todo.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CatsComponent } from './components/cats/cats.component';

const routes: Routes = [
  {
    path:'weather',
    component:WeatherComponent
  },
  {
    path:'todo',
    component:TodoComponent
  },
  {
    path: 'cats',
    component: CatsComponent
  },
  {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
