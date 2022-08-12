import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
   miEducacion:any

  constructor(private serviciodatabase:DatabaseService) { }

  ngOnInit(): void {
    this.mostrarDatos();
  }

  mostrarDatos() {
    this.serviciodatabase.obtenerDatosEducacion().subscribe(data =>{
      console.log(data);
      this.miEducacion=data;
    })

  }
}
