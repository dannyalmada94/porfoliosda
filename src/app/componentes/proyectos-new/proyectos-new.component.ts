import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProyectosI } from 'src/app/ProyectosI';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos-new',
  templateUrl: './proyectos-new.component.html',
  styleUrls: ['./proyectos-new.component.css']
})
export class ProyectosNewComponent implements OnInit {
  @Output() agregarProyectoPass:EventEmitter<ProyectosI> = new EventEmitter();
  nombre_proyecto:string = "";
  descripcion:string = "";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  guardarProyecto() {
    if(this.nombre_proyecto.length === 0, this.descripcion.length === 0) {
      alert("Por favor, complete los campos solicitados");
      return
    }
    const {nombre_proyecto, descripcion} = this
    const nuevoProyecto = {nombre_proyecto, descripcion}
    this.agregarProyectoPass.emit(nuevoProyecto),
    this.ngOnInit();
    console.log(nuevoProyecto);
  }

  backPorfolio() {
    this.router.navigate(['porfolio']);
  }
}
