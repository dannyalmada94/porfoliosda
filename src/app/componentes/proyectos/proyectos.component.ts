import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicios/database.service';
import { ProyectosI } from 'src/app/ProyectosI';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  misProyectos:ProyectosI [] = [];
  constructor(private serviciodatabase:DatabaseService,
              private router:Router) { }

  ngOnInit(): void {
    this.mostrarDatosProyectos();
  }

  mostrarDatosProyectos() {
    this.serviciodatabase.obtenerDatosProyecto().subscribe(data =>{
      this.misProyectos=data;
    })
  }

  addProject() {
    this.router.navigate(['porfolio/proyectosave']);
  }

  eliminarProyecto(proyecto:ProyectosI) {
    this.serviciodatabase.borrarProyecto(proyecto).subscribe(() => {
      this.misProyectos = this.misProyectos.filter(p => p.id_proyecto !== proyecto.id_proyecto)
    })
  }

}
