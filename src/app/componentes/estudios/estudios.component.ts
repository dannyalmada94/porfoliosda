import { Component, OnInit } from '@angular/core';
import { EstudiosI } from 'src/app/EstudiosI';
import { DatabaseService } from 'src/app/servicios/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
   miEducacion: EstudiosI [] = [];

  constructor(private serviciodatabase:DatabaseService,
              private router:Router
              ) { }

  ngOnInit(): void {
    this.mostrarDatos();
  }

  mostrarDatos() {
    this.serviciodatabase.obtenerDatosEducacion().subscribe(data =>{
      this.miEducacion=data;
    })}

  eliminarEducacion(educacion:EstudiosI) {
    this.serviciodatabase.borrarEducacion(educacion).subscribe(() => {
      this.miEducacion = this.miEducacion.filter(e => e.id_educacion!== educacion.id_educacion)
    })
  }

  addEducacion() {
    this.router.navigate(['porfolio/estudiosave'])
  }
}
