import { RouterModule, Routes } from "@angular/router";
import { MenuComponent } from "./menu.component";
import { NgModule } from "@angular/core";




const menuRoutes: Routes = [
  {path: 'menu' , component: MenuComponent},

  ];

  @NgModule({
      imports:[RouterModule.forChild(menuRoutes)],
      exports:[RouterModule]
  })


  export class MenuRoutingModule {}
