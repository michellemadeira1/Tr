import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoginRoutingModule } from "./login.routing.module";
import { LoginComponent } from "./login.component";
import { CadastroComponent } from "./cadastro/cadastro.component";






@NgModule({
  imports:[
      CommonModule,
      LoginRoutingModule
  ],
  exports:[],
  declarations:[LoginComponent,
                CadastroComponent],


  providers:[],
})


export class LoginModule {}
