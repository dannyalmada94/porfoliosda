import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  misProyectos:any
  constructor(private serviciodatabase:DatabaseService) { }

  ngOnInit(): void {
    this.mostrarDatosProyectos();
  }

  mostrarDatosProyectos() {
    this.serviciodatabase.obtenerDatosProyecto().subscribe(data =>{
      console.log(data);
      this.misProyectos=data;
    })
  }

}
