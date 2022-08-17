import { Component, OnInit } from '@angular/core';
import { ProyectosI } from 'src/app/ProyectosI';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-proyectos-save',
  templateUrl: './proyectos-save.component.html',
  styleUrls: ['./proyectos-save.component.css']
})
export class ProyectosSaveComponent implements OnInit {
  misProyectos:ProyectosI[] = [];

  constructor(private databaseservice:DatabaseService,
              private router:Router) { }

  ngOnInit(): void {
  }

  agregarNuevoProyecto(proyecto:ProyectosI){
    this.databaseservice.agregarProyectoDB(proyecto).subscribe((proyecto) => {
      this.misProyectos.push(proyecto);
      this.router.navigate(['porfolio']);
  })
}
}
