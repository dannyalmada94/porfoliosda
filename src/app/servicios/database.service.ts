import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EstudiosI } from '../EstudiosI';
import { ExperienciaI } from '../Experiencia';
import { HabilidadI } from '../HabilidadI';
import { TecnologiasI } from '../TecnologiasI';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private apiUrl = 'http://localhost:8080/personas/1'
  private urlDos = 'http://localhost:8080/proyectos'
  private urlTres = 'http://localhost:8080/educacion'
  private urlCuatro = 'http://localhost:8080/habilidades'
  private urlCinco = 'http://localhost:8080/experiencias'
  private urlSeis = 'http://localhost:8080/tecnologias'

  constructor(private http:HttpClient) { }

  obtenerDatosPersona(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
}

//Métodos correspondientes al componente "Proyectos"

obtenerDatosProyecto(): Observable<any[]> {
  return this.http.get<any[]>(this.urlDos)
}

//Métodos correspondientes al componente "Educacion"
obtenerDatosEducacion(): Observable<EstudiosI[]> {
  return this.http.get<EstudiosI[]>(this.urlTres)
}

borrarEducacion(educacion:EstudiosI): Observable<EstudiosI[]> {
  const url = `http://localhost:8080/educacion/borrar/${educacion.id_educacion}`
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
obtenerDatosHabilidad(): Observable<any[]> {
  return this.http.get<any[]>(this.urlCuatro)
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

editarExperiencia(datosExperiencia:ExperienciaI): Observable<ExperienciaI> {
  const url = `http://localhost:8080/experiencias/editar/${datosExperiencia.id_experiencia}`
  return this.http.put<ExperienciaI>(url, datosExperiencia);
}

obtenerExperiencia(id_experiencia:any): Observable<ExperienciaI> {
  const url = `http://localhost:8080/experiencias/${id_experiencia}`
  return this.http.get<ExperienciaI>(url);
}

//Métodos correrspondientes al componente "Tecnologias"
obtenerDatosTecnologia(): Observable<any[]> {
  return this.http.get<any[]>(this.urlSeis)
}

borrarTecnologia(tecnologia:TecnologiasI): Observable<TecnologiasI[]> {
  const url = `http://localhost:8080/tecnologias/borrar/${tecnologia.id_tecnologias}`
  return this.http.delete<TecnologiasI[]>(url);
}

agregarTecnologiaDB(tecnologia:TecnologiasI): Observable<TecnologiasI> {
  return this.http.post<TecnologiasI>(this.urlSeis, tecnologia, httpOptions)
}


 
}
