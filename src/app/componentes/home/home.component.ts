import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/servicios/database.service';
import { EstudiosI } from 'src/app/EstudiosI';
import { ExperienciaI } from 'src/app/Experiencia';
import { HabilidadI } from 'src/app/HabilidadI';
import { ProyectosI } from 'src/app/ProyectosI';
import { TecnologiasI } from 'src/app/TecnologiasI';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  persona:any=[];
  contacto:any=[];
  miEducacion: EstudiosI [] = [];
  miExperiencia: ExperienciaI [] = [];
  miHabilidad:HabilidadI [] = [];
  misProyectos:ProyectosI [] = [];
  miTecnologia:TecnologiasI[] = [];

  constructor(private router:Router,
              private serviciodatabase:DatabaseService) { }

  ngOnInit(): void {
    this.mostrarDatosPersona();
    this.mostrarDatosEstudios();
    this.mostrarDatosExperiencia();
    this.mostrarDatosHabilidad();
    this.mostrarDatosProyectos();
    this.mostrarDatosTecnologia();
    this.mostrarDatosContacto();
    
  }

  signIn() {
    this.router.navigate(['login']);
  }

  mostrarDatosPersona() {
    this.serviciodatabase.obtenerDatosPersona().subscribe(data =>{
      this.persona=data;
    })
  }

  mostrarDatosEstudios() {
    this.serviciodatabase.obtenerDatosEducacion().subscribe(data =>{
      this.miEducacion=data;
    })}

  mostrarDatosExperiencia() {
    this.serviciodatabase.obtenerDatosExperiencia().subscribe(experiencia =>{
      this.miExperiencia=experiencia;
    })
  }

  mostrarDatosHabilidad() {
    this.serviciodatabase.obtenerDatosHabilidad().subscribe(data =>{
      this.miHabilidad=data;
    })
}

  mostrarDatosProyectos() {
  this.serviciodatabase.obtenerDatosProyecto().subscribe(data =>{
    this.misProyectos=data;
  })
}

mostrarDatosTecnologia() {
  this.serviciodatabase.obtenerDatosTecnologia().subscribe(data =>{
    this.miTecnologia=data;
  })

}

mostrarDatosContacto() {
  this.serviciodatabase.obtenerDatosContacto().subscribe(data =>{
    this.contacto=data;
  })
}

}
