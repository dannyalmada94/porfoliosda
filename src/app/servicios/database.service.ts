import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienciaI } from '../Experiencia';

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

obtenerDatosProyecto(): Observable<any[]> {
  return this.http.get<any[]>(this.urlDos)
}

obtenerDatosEducacion(): Observable<any[]> {
  return this.http.get<any[]>(this.urlTres)
}

obtenerDatosHabilidad(): Observable<any[]> {
  return this.http.get<any[]>(this.urlCuatro)
}

obtenerDatosExperiencia(): Observable<ExperienciaI[]> {
  return this.http.get<ExperienciaI[]>(this.urlCinco)
}

obtenerDatosTecnologia(): Observable<any[]> {
  return this.http.get<any[]>(this.urlSeis)
}

borrarExperiencia(experiencia:ExperienciaI): Observable<ExperienciaI[]> {
  const url = `http://localhost:8080/experiencias/borrar/${experiencia.id_experiencia}`
  return this.http.delete<ExperienciaI[]>(url);
}

agregarExperienciaDB(experiencia:ExperienciaI): Observable<ExperienciaI> {
  return this.http.post<ExperienciaI>(this.urlCinco, experiencia, httpOptions);
}

editarExperiencia(experiencia:ExperienciaI): Observable<ExperienciaI[]> {
  const url = `http://localhost:8080/editar/${experiencia.id_experiencia}`
  return this.http.put<ExperienciaI[]>(url, experiencia, httpOptions);
}
 
}
