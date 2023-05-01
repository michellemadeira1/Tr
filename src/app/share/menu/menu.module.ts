import { MenuComponent } from './menu.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';



@NgModule({
  imports:[
      CommonModule,
      RouterModule
  ],
  exports:[],
  declarations:[MenuComponent],
  providers:[],
})


export class MenuModule {}
