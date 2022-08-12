import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ExperienciaI } from 'src/app/Experiencia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia-new',
  templateUrl: './experiencia-new.component.html',
  styleUrls: ['./experiencia-new.component.css']
})
export class ExperienciaNewComponent implements OnInit {
  @Output() agregarExperiencia:EventEmitter<ExperienciaI> = new EventEmitter();
  modalidad:string = "";
  nombre_empresa:string = "";
  descripcion:string = "";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  guardarExperiencia() {
    if(this.modalidad.length === 0){
      alert("Por favor, agregue una modalidad");
      return
    }
    const {modalidad, nombre_empresa, descripcion} = this
    const nuevaExperiencia = {modalidad, nombre_empresa, descripcion}
    this.agregarExperiencia.emit(nuevaExperiencia),
    this.ngOnInit();
  }

  backPorfolio() {
    this.router.navigate(['porfolio']);
  }

}
