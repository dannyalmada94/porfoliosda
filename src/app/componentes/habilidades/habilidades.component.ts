import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  miHabilidad:any

  constructor(private serviciodatabase:DatabaseService) { }

  ngOnInit(): void {
    this.mostrarDatos()
  }

  mostrarDatos() {
    this.serviciodatabase.obtenerDatosHabilidad().subscribe(data =>{
      console.log(data);
      this.miHabilidad=data;
    })

}
}
