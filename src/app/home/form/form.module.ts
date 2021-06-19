import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormRoutingModule } from './form-routing.module';

@NgModule({
  declarations: [
  FormComponent

    //Angular Material    
  ],
  entryComponents : [],
  imports: [    
    FormRoutingModule,
    CommonModule,
    
   
  ],
  providers: [],
  exports : [FormComponent]
  
})
export class FormModule { }
