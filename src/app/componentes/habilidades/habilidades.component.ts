import { Component, OnInit } from '@angular/core';
import { HabilidadI } from 'src/app/HabilidadI';
import { DatabaseService } from 'src/app/servicios/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  miHabilidad:HabilidadI [] = [];

  constructor(private serviciodatabase:DatabaseService,
              private router:Router) { }

  ngOnInit(): void {
    this.mostrarDatos()
  }

  mostrarDatos() {
    this.serviciodatabase.obtenerDatosHabilidad().subscribe(data =>{
      console.log(data);
      this.miHabilidad=data;
    })
}

eliminarHabilidad(habilidad:HabilidadI) {
  this.serviciodatabase.borrarHabilidad(habilidad).subscribe(() => {
    this.miHabilidad = this.miHabilidad.filter(h => h.id_habilidades !== habilidad.id_habilidades)
  })
}
 addSkill() {
  this.router.navigate(['porfolio/habilidadsave']);
 }
}
