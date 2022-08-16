import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EstudiosI } from 'src/app/EstudiosI';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudios-new',
  templateUrl: './estudios-new.component.html',
  styleUrls: ['./estudios-new.component.css']
})
export class EstudiosNewComponent implements OnInit {
  @Output() agregarEducacion:EventEmitter<EstudiosI> = new EventEmitter();
  tipo_educacion:string = "";
  titulo:string = "";
  descripcion:string = "";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  guardarEducacion() {
    if (this.tipo_educacion.length === 0, this.titulo.length === 0, this.descripcion.length === 0){
      alert("Por favor complete todos los campos");
      return 
    }
    const {tipo_educacion, titulo, descripcion} = this
    const nuevaEducacion = {tipo_educacion, titulo, descripcion}
    this.agregarEducacion.emit(nuevaEducacion);
    this.ngOnInit();
  }

  backPorfolio() {
    this.router.navigate(['/porfolio']);
  }

}
