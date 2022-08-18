import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-acercami',
  templateUrl: './acercami.component.html',
  styleUrls: ['./acercami.component.css']
})
export class AcercamiComponent implements OnInit {
  persona:any = [];
  constructor(private serviciodatabase:DatabaseService) { }

  ngOnInit(): void {
    this.mostrarDatos();
  }

  mostrarDatos() {
    this.serviciodatabase.obtenerDatosPersona().subscribe(data=>{
      this.persona=data;
    })
  }

}
