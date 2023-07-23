import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { HelloComponent } from './hello/hello.component';


const routes: Routes = [ { path: 'cliente', component: ClienteComponent, canActivate: [AuthGuard]  },
                         { path: 'hello', component: HelloComponent},
                         { path: 'login', component: LoginComponent  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
