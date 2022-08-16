import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TecnologiasI } from 'src/app/TecnologiasI';

@Component({
  selector: 'app-tecnologias-items',
  templateUrl: './tecnologias-items.component.html',
  styleUrls: ['./tecnologias-items.component.css']
})
export class TecnologiasItemsComponent implements OnInit {
  @Input() tecnologia:any
  @Output() borrarTecnologiaPass:EventEmitter<TecnologiasI> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  borrarTecnologia(tecnologia:TecnologiasI) {
    this.borrarTecnologiaPass.emit(tecnologia);
  }

}
