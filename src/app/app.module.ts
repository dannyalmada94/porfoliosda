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
    ExperienciaFormsComponent
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
