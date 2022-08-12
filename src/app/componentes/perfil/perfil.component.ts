import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  persona:any;

  constructor (private serviciodatabase:DatabaseService) {
    
   }
  

  ngOnInit(): void {
    this.mostrarDatos();
};

mostrarDatos() {
  this.serviciodatabase.obtenerDatosPersona().subscribe(data =>{
    console.log(data);
    this.persona=data;
  })
}

}
