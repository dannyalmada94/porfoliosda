import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HabilidadI } from 'src/app/HabilidadI';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habilidades-items',
  templateUrl: './habilidades-items.component.html',
  styleUrls: ['./habilidades-items.component.css']
})
export class HabilidadesItemsComponent implements OnInit {
  @Input() habilidad:any
  @Output() borrarHabilidadPass:EventEmitter<HabilidadI> = new EventEmitter();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  borrarHabilidad(habilidad:HabilidadI) {
    this.borrarHabilidadPass.emit(habilidad);
  }

  editSkill(id_habilidades:any) {
    this.router.navigate(['porfolio/habilidadedit', id_habilidades])
  }
}
