import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HabilidadI } from 'src/app/HabilidadI';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habilidades-new',
  templateUrl: './habilidades-new.component.html',
  styleUrls: ['./habilidades-new.component.css']
})
export class HabilidadesNewComponent implements OnInit {
  @Output() agregarHabilidadPass:EventEmitter<HabilidadI> = new EventEmitter();
  tipo_habilidad:string = "";
  descripcion:string = "";

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  guardarHabilidad() {
    if(this.tipo_habilidad.length === 0, this.descripcion.length === 0) {
      alert("Por favor, complete los campos solicitados");
      return
    }
    const {tipo_habilidad, descripcion} = this
    const nuevaHabilidad = {tipo_habilidad, descripcion}
    this.agregarHabilidadPass.emit(nuevaHabilidad),
    this.ngOnInit();
    console.log(nuevaHabilidad);
  }

  backPorfolio() {
    this.router.navigate(['/porfolio']);
  }
}
