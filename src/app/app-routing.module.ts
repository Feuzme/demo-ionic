import { TodoComponent } from './todo/todo.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CatsComponent } from './cats/cats.component';

const routes: Routes = [
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
    redirectTo: 'cats',
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
