import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ExperienciaI } from 'src/app/Experiencia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia-new',
  templateUrl: './experiencia-new.component.html',
  styleUrls: ['./experiencia-new.component.css']
})
export class ExperienciaNewComponent implements OnInit {
  //Emito el método "agregarExperiencia" hacia el componente padre "experiencia-save"
  @Output() agregarExperiencia:EventEmitter<ExperienciaI> = new EventEmitter();
  modalidad:string = "";
  nombre_empresa:string = "";
  descripcion:string = "";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  //Toma los parametros del formulario para enviarlos al componente padre mediante el metodo "agregarExperiencia"
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

  //Al hacer click en el botón "Volver", simplemente nos redirige a la vista principal del porfolio
  backPorfolio() {
    this.router.navigate(['porfolio']);
  }

}
