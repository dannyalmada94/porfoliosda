import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { AcercamiComponent } from './componentes/acercami/acercami.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { TecnologiasComponent } from './componentes/tecnologias/tecnologias.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseService } from './servicios/database.service';
import { ExperienciaItemsComponent } from './componentes/experiencia-items/experiencia-items.component';
import { ExperienciaNewComponent } from './componentes/experiencia-new/experiencia-new.component';
import { ExperienciaSaveComponent } from './componentes/experiencia-save/experiencia-save.component';
import { ExperienciaEditComponent } from './componentes/experiencia-edit/experiencia-edit.component';
import { ExperienciaFormsComponent } from './componentes/experiencia-forms/experiencia-forms.component';
import { EstudiosItemsComponent } from './componentes/estudios-items/estudios-items.component';
import { EstudiosSaveComponent } from './componentes/estudios-save/estudios-save.component';
import { EstudiosNewComponent } from './componentes/estudios-new/estudios-new.component';
import { EstudiosEditComponent } from './componentes/estudios-edit/estudios-edit.component';
import { EstudiosFormComponent } from './componentes/estudios-form/estudios-form.component';
import { HabilidadesItemsComponent } from './componentes/habilidades-items/habilidades-items.component';
import { HabilidadesNewComponent } from './componentes/habilidades-new/habilidades-new.component';
import { HabilidadesSaveComponent } from './componentes/habilidades-save/habilidades-save.component';
import { HabilidadesEditComponent } from './componentes/habilidades-edit/habilidades-edit.component';
import { HabilidadesFormComponent } from './componentes/habilidades-form/habilidades-form.component';
import { TecnologiasItemsComponent } from './componentes/tecnologias-items/tecnologias-items.component';
import { TecnologiasNewComponent } from './componentes/tecnologias-new/tecnologias-new.component';
import { TecnologiasSaveComponent } from './componentes/tecnologias-save/tecnologias-save.component';
import { TecnologiasEditComponent } from './componentes/tecnologias-edit/tecnologias-edit.component';
import { TecnologiasFormComponent } from './componentes/tecnologias-form/tecnologias-form.component';
import { ProyectosItemsComponent } from './componentes/proyectos-items/proyectos-items.component';
import { ProyectosNewComponent } from './componentes/proyectos-new/proyectos-new.component';
import { ProyectosSaveComponent } from './componentes/proyectos-save/proyectos-save.component';
import { ProyectosEditComponent } from './componentes/proyectos-edit/proyectos-edit.component';
import { ProyectosFormComponent } from './componentes/proyectos-form/proyectos-form.component';
import { HomeComponent } from './componentes/home/home.component';
import { PerfilEditComponent } from './componentes/perfil-edit/perfil-edit.component';
import { PerfilFormComponent } from './componentes/perfil-form/perfil-form.component';
import { EncabezadoEditComponent } from './componentes/encabezado-edit/encabezado-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    PorfolioComponent,
    AcercamiComponent,
    EncabezadoComponent,
    EstudiosComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    PerfilComponent,
    TecnologiasComponent,
    ProyectosComponent,
    ExperienciaItemsComponent,
    ExperienciaNewComponent,
    ExperienciaSaveComponent,
    ExperienciaEditComponent,
    ExperienciaFormsComponent,
    EstudiosItemsComponent,
    EstudiosSaveComponent,
    EstudiosNewComponent,
    EstudiosEditComponent,
    EstudiosFormComponent,
    HabilidadesItemsComponent,
    HabilidadesNewComponent,
    HabilidadesSaveComponent,
    HabilidadesEditComponent,
    HabilidadesFormComponent,
    TecnologiasItemsComponent,
    TecnologiasNewComponent,
    TecnologiasSaveComponent,
    TecnologiasEditComponent,
    TecnologiasFormComponent,
    ProyectosItemsComponent,
    ProyectosNewComponent,
    ProyectosSaveComponent,
    ProyectosEditComponent,
    ProyectosFormComponent,
    HomeComponent,
    PerfilEditComponent,
    PerfilFormComponent,
    EncabezadoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    HttpClientModule
  ],
  providers: [
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
