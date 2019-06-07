import { AreaDeUsuarioComponent } from './componentes/area-de-usuario/area-de-usuario.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { LogeoComponent } from './componentes/logeo/logeo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [  { path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: LogeoComponent/* , canActivate: [AuthGuard] */ },
{ path: 'register', component: RegistrarComponent/* , canActivate: [AuthGuard] */ },
{ path: 'user', component: AreaDeUsuarioComponent/* ,  resolve: { data: UserResolver} */}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
