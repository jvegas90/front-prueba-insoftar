import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EdituserComponent } from './edituser.component';


const routes: Routes = [{
  path: '',
  component: EdituserComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdituserRoutingModule {
}
