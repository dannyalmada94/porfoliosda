import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExperienciaI } from 'src/app/Experiencia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia-items',
  templateUrl: './experiencia-items.component.html',
  styleUrls: ['./experiencia-items.component.css']
})
export class ExperienciaItemsComponent implements OnInit {
  @Input() experiencia:any
  @Output() borrarExperienciaPass:EventEmitter<ExperienciaI> = new EventEmitter();
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  borrarExperiencia(experiencia:ExperienciaI) {
    this.borrarExperienciaPass.emit(experiencia);
  }

  editExperiencia() {
    this.router.navigate(['porfolio/experienciaedit']);
  }

}
