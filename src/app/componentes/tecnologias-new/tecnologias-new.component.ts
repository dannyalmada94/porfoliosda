import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TecnologiasI } from 'src/app/TecnologiasI';

@Component({
  selector: 'app-tecnologias-new',
  templateUrl: './tecnologias-new.component.html',
  styleUrls: ['./tecnologias-new.component.css']
})
export class TecnologiasNewComponent implements OnInit {
  @Output() agregarTecnologiaPass:EventEmitter<TecnologiasI> = new EventEmitter();
  lenguaje_framework:string = "";
  descripcion:string = "";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  guardarTecnologia() {
    if (this.lenguaje_framework.length === 0, this.descripcion.length === 0) {
      alert("Por favor, complete todos los campos requeridos")
      return
    }
    const {lenguaje_framework, descripcion} = this
    const nuevaTecnologia = {lenguaje_framework, descripcion}
    this.agregarTecnologiaPass.emit(nuevaTecnologia),
    this.ngOnInit();
    console.log(nuevaTecnologia);
  }

  backPorfolio() {
    this.router.navigate(['porfolio'])
  }
}
