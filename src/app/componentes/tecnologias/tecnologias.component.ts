import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit {
  miTecnologia:any

  constructor(private serviciodatabase:DatabaseService) { }

  ngOnInit(): void {
    this.mostrarDatos();
  }

  mostrarDatos() {
    this.serviciodatabase.obtenerDatosTecnologia().subscribe(data =>{
      console.log(data);
      this.miTecnologia=data;
    })

  }
 
}
