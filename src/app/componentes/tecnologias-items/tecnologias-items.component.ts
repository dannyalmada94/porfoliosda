import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TecnologiasI } from 'src/app/TecnologiasI';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tecnologias-items',
  templateUrl: './tecnologias-items.component.html',
  styleUrls: ['./tecnologias-items.component.css']
})
export class TecnologiasItemsComponent implements OnInit {
  @Input() tecnologia:any
  @Output() borrarTecnologiaPass:EventEmitter<TecnologiasI> = new EventEmitter();
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  borrarTecnologia(tecnologia:TecnologiasI) {
    this.borrarTecnologiaPass.emit(tecnologia);
  }

  editTech(id_tecnologias:any) {
    this.router.navigate(['porfolio/tecnologiaedit', id_tecnologias]);
  }

}
