import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExperienciaI } from 'src/app/Experiencia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia-items',
  templateUrl: './experiencia-items.component.html',
  styleUrls: ['./experiencia-items.component.css']
})
export class ExperienciaItemsComponent implements OnInit {
  //Hago un imput desde el componente padre "Experiencia"
  @Input() experiencia:any
  //Hago un output de la experiencia a borrar, para que el componente padre maneje la lógica para eliminar
  @Output() borrarExperienciaPass:EventEmitter<ExperienciaI> = new EventEmitter();
  constructor(private router:Router ) { }

  ngOnInit(): void {
  }

  borrarExperiencia(experiencia:ExperienciaI) {
    this.borrarExperienciaPass.emit(experiencia);
  }

  //Al dar click en el botón "editar" redirige al componente "experiencia edit" que a su vez contiene el componente
  //para poder editar la experiencia seleccionada
  editExperiencia(id_experiencia:any) {
    this.router.navigate(['porfolio/experienciaedit', id_experiencia]);
  }
}
