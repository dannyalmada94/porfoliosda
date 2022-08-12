import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicios/database.service';
import { ExperienciaI } from 'src/app/Experiencia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  miExperiencia: ExperienciaI [] = [];

  constructor(private serviciodatabase:DatabaseService,
              private router:Router) { }

  ngOnInit(): void {
      this.serviciodatabase.obtenerDatosExperiencia().subscribe(experiencia =>{
        this.miExperiencia=experiencia;
      });
  }

  borrarExperiencia(experiencia:ExperienciaI) {
    this.serviciodatabase.borrarExperiencia(experiencia).subscribe(() => {
      this.miExperiencia = this.miExperiencia.filter( e => e.id_experiencia !== experiencia.id_experiencia)
    })
  }

  addExperiencia(){
    this.router.navigate(['porfolio/experienciasave']);
  }

  }
