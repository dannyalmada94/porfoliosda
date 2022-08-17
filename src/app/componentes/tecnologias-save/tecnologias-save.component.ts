import { Component, OnInit } from '@angular/core';
import { TecnologiasI } from 'src/app/TecnologiasI';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/servicios/database.service';


@Component({
  selector: 'app-tecnologias-save',
  templateUrl: './tecnologias-save.component.html',
  styleUrls: ['./tecnologias-save.component.css']
})
export class TecnologiasSaveComponent implements OnInit {
  miTecnologia: TecnologiasI [] = [];

  constructor(private databaseservice:DatabaseService,
              private router:Router) { }

  ngOnInit(): void {
  }

  agregarNuevaTecnologia(tecnologia:TecnologiasI) {
    this.databaseservice.agregarTecnologiaDB(tecnologia).subscribe((tecnologia) => {
      this.miTecnologia.push(tecnologia);
      this.router.navigate(['porfolio']);
    })
  }

}
