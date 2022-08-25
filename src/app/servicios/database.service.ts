import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EstudiosI } from '../EstudiosI';
import { ExperienciaI } from '../Experiencia';
import { HabilidadI } from '../HabilidadI';
import { ProyectosI } from '../ProyectosI';
import { TecnologiasI } from '../TecnologiasI';
import { PersonaI } from '../PersonaI';
import { ContactoI } from '../ContactoI';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private apiUrl = 'http://localhost:8080/personas'
  private urlDos = 'http://localhost:8080/proyectos'
  private urlTres = 'http://localhost:8080/educacion'
  private urlCuatro = 'http://localhost:8080/habilidades'
  private urlCinco = 'http://localhost:8080/experiencias'
  private urlSeis = 'http://localhost:8080/tecnologias'
  private urlSiete = 'http://localhost:8080/contacto'

  constructor(private http:HttpClient) { }

  //Métodos correspondientes al componente Contacto
  obtenerDatosContacto(): Observable<any[]> {
    return this.http.get<any[]>(this.urlSiete)
  }

  obtenerContacto(): Observable<ContactoI> {
    const url = `http://localhost:8080/contacto/1`
    return this.http.get<ContactoI>(url);
  }

  editarContacto(contacto:ContactoI): Observable<ContactoI> {
    const url = `http://localhost:8080/${contacto.id_contacto}`
    return this.http.put<ContactoI>(url, contacto);
  }

  //Métodos correspondientes al componente Perfil

  obtenerDatosPersona(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
}

  obtenerPersona(id_persona:any): Observable<PersonaI> {
    const url = `http://localhost:8080/personas/${id_persona}`
    return this.http.get<PersonaI>(url);
  }

  editarPersona(persona:PersonaI): Observable<PersonaI> {
    const url = `http://localhost:8080/${persona.id_persona}`
    return this.http.put<PersonaI>(url, persona);
  }

//Métodos correspondientes al componente "Proyectos"

obtenerDatosProyecto(): Observable<ProyectosI[]> {
  return this.http.get<ProyectosI[]>(this.urlDos);
}

agregarProyectoDB(proyecto:ProyectosI): Observable<ProyectosI> {
  return this.http.post<ProyectosI>(this.urlDos, proyecto, httpOptions);
}

borrarProyecto(proyecto:ProyectosI): Observable<ProyectosI[]> {
  const url = `http://localhost:8080/${proyecto.id_proyecto}`
  return this.http.delete<ProyectosI[]>(url);
}

obtenerProyecto(id_proyecto:any): Observable<ProyectosI> {
  const url = `http://localhost:8080/proyectos/${id_proyecto}`
  return this.http.get<ProyectosI>(url);
}

editarProyecto(datosProyecto:ProyectosI): Observable<ProyectosI> {
  const url = `http://localhost:8080/proyectos/editar/${datosProyecto.id_proyecto}`
  return this.http.put<ProyectosI>(url, datosProyecto);
}

//Métodos correspondientes al componente "Educacion"
obtenerDatosEducacion(): Observable<EstudiosI[]> {
  return this.http.get<EstudiosI[]>(this.urlTres)
}

borrarEducacion(educacion:EstudiosI): Observable<EstudiosI[]> {
  const url = `http://localhost:8080/${educacion.id_educacion}`
  return this.http.delete<EstudiosI[]>(url);
}

agregarEducacionDB(educacion:EstudiosI): Observable<EstudiosI> {
  return this.http.post<EstudiosI>(this.urlTres, educacion, httpOptions);
}

obtenerEducacion(id_educacion:any): Observable<EstudiosI> {
  const url = `http://localhost:8080/educacion/${id_educacion}`
  return this.http.get<EstudiosI>(url);
}

editarEducacion(datosEstudios:EstudiosI): Observable<EstudiosI> {
  const url = `http://localhost:8080/educacion/editar/${datosEstudios.id_educacion}`
  return this.http.put<EstudiosI>(url, datosEstudios);
}

//Métodos correspondientes al componente "Habilidades"
obtenerDatosHabilidad(): Observable<HabilidadI[]> {
  return this.http.get<HabilidadI[]>(this.urlCuatro)
}

borrarHabilidad(habilidad:HabilidadI): Observable<HabilidadI[]> {
  const url = `http://localhost:8080/habilidades/borrar/${habilidad.id_habilidades}`
  return this.http.delete<HabilidadI[]>(url);
}

agregarHabilidadDB(habilidad:HabilidadI): Observable<HabilidadI> {
  return this.http.post<HabilidadI>(this.urlCuatro, habilidad, httpOptions);
}

obtenerHabilidad(id_habilidades:any): Observable<HabilidadI> {
  const url = `http://localhost:8080/habilidades/${id_habilidades}`
  return this.http.get<HabilidadI>(url);
}

editarHabilidad(habilidad:HabilidadI): Observable<HabilidadI> {
  const url = `http://localhost:8080/habilidades/editar/${habilidad.id_habilidades}`
  return this.http.put<HabilidadI>(url, habilidad);
}
//Métodos correspondientes al componente "Experiencia"

obtenerDatosExperiencia(): Observable<ExperienciaI[]> {
  return this.http.get<ExperienciaI[]>(this.urlCinco)
}
borrarExperiencia(experiencia:ExperienciaI): Observable<ExperienciaI[]> {
  const url = `http://localhost:8080/experiencias/borrar/${experiencia.id_experiencia}`
  return this.http.delete<ExperienciaI[]>(url);
}

agregarExperienciaDB(experiencia:ExperienciaI): Observable<ExperienciaI> {
  return this.http.post<ExperienciaI>(this.urlCinco, experiencia, httpOptions);
}

editarExperiencia(datosExperiencia:any): Observable<ExperienciaI> {
  const url = `http://localhost:8080/experiencias/editar/${datosExperiencia.id_experiencia}`
  return this.http.put<ExperienciaI>(url, datosExperiencia);
}

obtenerExperiencia(id_experiencia:any): Observable<ExperienciaI> {
  const url = `http://localhost:8080/experiencias/${id_experiencia}`
  return this.http.get<ExperienciaI>(url);
}

//Métodos correrspondientes al componente "Tecnologias"
obtenerDatosTecnologia(): Observable<TecnologiasI[]> {
  return this.http.get<TecnologiasI[]>(this.urlSeis)
}

borrarTecnologia(tecnologia:TecnologiasI): Observable<TecnologiasI[]> {
  const url = `http://localhost:8080/tecnologias/borrar/${tecnologia.id_tecnologias}`
  return this.http.delete<TecnologiasI[]>(url);
}

agregarTecnologiaDB(tecnologia:TecnologiasI): Observable<TecnologiasI> {
  return this.http.post<TecnologiasI>(this.urlSeis, tecnologia, httpOptions)
}

obtenerTecnologia(id_tecnologias:any): Observable<TecnologiasI> {
  const url = `http://localhost:8080/tecnologias/${id_tecnologias}`
  return this.http.get<TecnologiasI>(url);
}

editarTecnologia(tecnologia:TecnologiasI): Observable<TecnologiasI> {
  const url = `http://localhost:8080/tecnologias/editar/${tecnologia.id_tecnologias}`
  return this.http.put<TecnologiasI>(url, tecnologia);
}

 
}
