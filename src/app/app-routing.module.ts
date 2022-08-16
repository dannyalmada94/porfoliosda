import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { ExperienciaSaveComponent } from './componentes/experiencia-save/experiencia-save.component';
import { ExperienciaEditComponent } from './componentes/experiencia-edit/experiencia-edit.component';
import { EstudiosSaveComponent } from './componentes/estudios-save/estudios-save.component';
import { EstudiosEditComponent } from './componentes/estudios-edit/estudios-edit.component';
import { HabilidadesSaveComponent } from './componentes/habilidades-save/habilidades-save.component';
import { HabilidadesEditComponent } from './componentes/habilidades-edit/habilidades-edit.component';

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
    path: 'porfolio/experienciaedit/:id_experiencia',
    component: ExperienciaEditComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'porfolio/estudiosave',
    component: EstudiosSaveComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'porfolio/estudioedit/:id_educacion',
    component: EstudiosEditComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'porfolio/habilidadsave',
    component: HabilidadesSaveComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'porfolio/habilidadedit/:id_habilidades',
    component:HabilidadesEditComponent,
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
