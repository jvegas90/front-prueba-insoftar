import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListuserComponent } from './listuser.component';
import { ListuserRoutingModule } from './listuser-routing.module';

@NgModule({
  declarations: [
  ListuserComponent

    //Angular Material    
  ],
  entryComponents : [],
  imports: [    
    ListuserRoutingModule,
    CommonModule,
  ],
  providers: [],
  exports : [ListuserComponent]
  
})
export class ListuserModule { }
