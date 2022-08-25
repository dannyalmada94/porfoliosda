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
  private apiUrl = 'https://glacial-ravine-33253.herokuapp.com/personas'
  private urlDos = 'https://glacial-ravine-33253.herokuapp.com/proyectos'
  private urlTres = 'https://glacial-ravine-33253.herokuapp.com/educacion'
  private urlCuatro = 'https://glacial-ravine-33253.herokuapp.com/habilidades'
  private urlCinco = 'https://glacial-ravine-33253.herokuapp.com/experiencias'
  private urlSeis = 'https://glacial-ravine-33253.herokuapp.com/tecnologias'
  private urlSiete = 'https://glacial-ravine-33253.herokuapp.com/contacto'

  constructor(private http:HttpClient) { }

  //Métodos correspondientes al componente Contacto
  obtenerDatosContacto(): Observable<any[]> {
    return this.http.get<any[]>(this.urlSiete)
  }

  obtenerContacto(): Observable<ContactoI> {
    const url = `https://glacial-ravine-33253.herokuapp.com/contacto/1`
    return this.http.get<ContactoI>(url);
  }

  editarContacto(contacto:ContactoI): Observable<ContactoI> {
    const url = `https://glacial-ravine-33253.herokuapp.com/contacto/editar/${contacto.id_contacto}`
    return this.http.put<ContactoI>(url, contacto);
  }

  //Métodos correspondientes al componente Perfil

  obtenerDatosPersona(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
}

  obtenerPersona(id_persona:any): Observable<PersonaI> {
    const url = `https://glacial-ravine-33253.herokuapp.com/personas/${id_persona}`
    return this.http.get<PersonaI>(url);
  }

  editarPersona(persona:PersonaI): Observable<PersonaI> {
    const url = `https://glacial-ravine-33253.herokuapp.com/personas/editar/${persona.id_persona}`
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
  const url = `https://glacial-ravine-33253.herokuapp.com/proyectos/borrar/${proyecto.id_proyecto}`
  return this.http.delete<ProyectosI[]>(url);
}

obtenerProyecto(id_proyecto:any): Observable<ProyectosI> {
  const url = `https://glacial-ravine-33253.herokuapp.com/proyectos/${id_proyecto}`
  return this.http.get<ProyectosI>(url);
}

editarProyecto(datosProyecto:ProyectosI): Observable<ProyectosI> {
  const url = `https://glacial-ravine-33253.herokuapp.com/proyectos/editar/${datosProyecto.id_proyecto}`
  return this.http.put<ProyectosI>(url, datosProyecto);
}

//Métodos correspondientes al componente "Educacion"
obtenerDatosEducacion(): Observable<EstudiosI[]> {
  return this.http.get<EstudiosI[]>(this.urlTres)
}

borrarEducacion(educacion:EstudiosI): Observable<EstudiosI[]> {
  const url = `https://glacial-ravine-33253.herokuapp.com/educacion/borrar/${educacion.id_educacion}`
  return this.http.delete<EstudiosI[]>(url);
}

agregarEducacionDB(educacion:EstudiosI): Observable<EstudiosI> {
  return this.http.post<EstudiosI>(this.urlTres, educacion, httpOptions);
}

obtenerEducacion(id_educacion:any): Observable<EstudiosI> {
  const url = `https://glacial-ravine-33253.herokuapp.com/educacion/${id_educacion}`
  return this.http.get<EstudiosI>(url);
}

editarEducacion(datosEstudios:EstudiosI): Observable<EstudiosI> {
  const url = `https://glacial-ravine-33253.herokuapp.com/educacion/editar/${datosEstudios.id_educacion}`
  return this.http.put<EstudiosI>(url, datosEstudios);
}

//Métodos correspondientes al componente "Habilidades"
obtenerDatosHabilidad(): Observable<HabilidadI[]> {
  return this.http.get<HabilidadI[]>(this.urlCuatro)
}

borrarHabilidad(habilidad:HabilidadI): Observable<HabilidadI[]> {
  const url = `https://glacial-ravine-33253.herokuapp.com/habilidades/borrar/${habilidad.id_habilidades}`
  return this.http.delete<HabilidadI[]>(url);
}

agregarHabilidadDB(habilidad:HabilidadI): Observable<HabilidadI> {
  return this.http.post<HabilidadI>(this.urlCuatro, habilidad, httpOptions);
}

obtenerHabilidad(id_habilidades:any): Observable<HabilidadI> {
  const url = `https://glacial-ravine-33253.herokuapp.com/habilidades/${id_habilidades}`
  return this.http.get<HabilidadI>(url);
}

editarHabilidad(habilidad:HabilidadI): Observable<HabilidadI> {
  const url = `https://glacial-ravine-33253.herokuapp.com/habilidades/editar/${habilidad.id_habilidades}`
  return this.http.put<HabilidadI>(url, habilidad);
}
//Métodos correspondientes al componente "Experiencia"

obtenerDatosExperiencia(): Observable<ExperienciaI[]> {
  return this.http.get<ExperienciaI[]>(this.urlCinco)
}
borrarExperiencia(experiencia:ExperienciaI): Observable<ExperienciaI[]> {
  const url = `https://glacial-ravine-33253.herokuapp.com/experiencias/borrar/${experiencia.id_experiencia}`
  return this.http.delete<ExperienciaI[]>(url);
}

agregarExperienciaDB(experiencia:ExperienciaI): Observable<ExperienciaI> {
  return this.http.post<ExperienciaI>(this.urlCinco, experiencia, httpOptions);
}

editarExperiencia(datosExperiencia:any): Observable<ExperienciaI> {
  const url = `https://glacial-ravine-33253.herokuapp.com/experiencias/editar/${datosExperiencia.id_experiencia}`
  return this.http.put<ExperienciaI>(url, datosExperiencia);
}

obtenerExperiencia(id_experiencia:any): Observable<ExperienciaI> {
  const url = `https://glacial-ravine-33253.herokuapp.com/experiencias/${id_experiencia}`
  return this.http.get<ExperienciaI>(url);
}

//Métodos correrspondientes al componente "Tecnologias"
obtenerDatosTecnologia(): Observable<TecnologiasI[]> {
  return this.http.get<TecnologiasI[]>(this.urlSeis)
}

borrarTecnologia(tecnologia:TecnologiasI): Observable<TecnologiasI[]> {
  const url = `https://glacial-ravine-33253.herokuapp.com/tecnologias/borrar/${tecnologia.id_tecnologias}`
  return this.http.delete<TecnologiasI[]>(url);
}

agregarTecnologiaDB(tecnologia:TecnologiasI): Observable<TecnologiasI> {
  return this.http.post<TecnologiasI>(this.urlSeis, tecnologia, httpOptions)
}

obtenerTecnologia(id_tecnologias:any): Observable<TecnologiasI> {
  const url = `https://glacial-ravine-33253.herokuapp.com/tecnologias/${id_tecnologias}`
  return this.http.get<TecnologiasI>(url);
}

editarTecnologia(tecnologia:TecnologiasI): Observable<TecnologiasI> {
  const url = `https://glacial-ravine-33253.herokuapp.com/tecnologias/editar/${tecnologia.id_tecnologias}`
  return this.http.put<TecnologiasI>(url, tecnologia);
}

 
}
