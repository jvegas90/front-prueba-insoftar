import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormRoutingModule } from './form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  FormComponent

    //Angular Material    
  ],
  entryComponents : [],
  imports: [    
    FormRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    
   
  ],
  providers: [],
  exports : [FormComponent]
  
})
export class FormModule { }
