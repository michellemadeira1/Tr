import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path:'menu',loadChildren: () => import('./share/menu/menu.module').then(m => m.MenuModule)},
  {path:'home',loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: '',loadChildren :() => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'cadstro',loadChildren :() => import('./login/cadastro/cadastro.component').then(m => m.CadastroComponent)},


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
