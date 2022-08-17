import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProyectosI } from 'src/app/ProyectosI';
import { Router } from '@angular/router';


@Component({
  selector: 'app-proyectos-items',
  templateUrl: './proyectos-items.component.html',
  styleUrls: ['./proyectos-items.component.css']
})
export class ProyectosItemsComponent implements OnInit {
  @Input() proyecto:any
  @Output() borrarProyectoPass:EventEmitter<ProyectosI> = new EventEmitter();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  eliminarProyecto(proyecto:ProyectosI) {
    this.borrarProyectoPass.emit(proyecto);
  }

  editProy(id_proyecto:ProyectosI) {
    this.router.navigate(['porfolio/proyectoedit', id_proyecto]);
  }
}
