import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: 'form',
    loadChildren: () => import('./home/form/form.module')
      .then(m => m.FormModule),
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./home/form/form.module')
      .then(m => m.FormModule),
  },
  {
    path: 'listuser',
    loadChildren: () => import('./home/listuser/listuser.module')
      .then(m => m.ListuserModule),
  },
  {
    path: '**',
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
