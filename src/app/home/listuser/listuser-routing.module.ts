import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListuserComponent } from './listuser.component';


const routes: Routes = [{
  path: '',
  component: ListuserComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListuserRoutingModule {
}
