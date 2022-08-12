import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { ExperienciaSaveComponent } from './componentes/experiencia-save/experiencia-save.component';
import { ExperienciaEditComponent } from './componentes/experiencia-edit/experiencia-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/porfolio'},
  {
    path: 'porfolio',
    component: PorfolioComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'porfolio/experienciasave',
    component: ExperienciaSaveComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'porfolio/experienciaedit',
    component: ExperienciaEditComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  { path:'registro', component: RegistroComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
