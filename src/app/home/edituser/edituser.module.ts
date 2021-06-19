import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdituserComponent } from './edituser.component';
import { EdituserRoutingModule } from './edituser-routing.module';

@NgModule({
  declarations: [
  EdituserComponent

    //Angular Material    
  ],
  entryComponents : [],
  imports: [    
    EdituserRoutingModule,
    CommonModule,
  ],
  providers: [],
  exports : [EdituserComponent]
  
})
export class EdituserModule { }
