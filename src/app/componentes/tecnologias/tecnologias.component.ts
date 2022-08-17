import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicios/database.service';
import { TecnologiasI } from 'src/app/TecnologiasI';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit {
  miTecnologia:TecnologiasI[] = [];

  constructor(private serviciodatabase:DatabaseService,
              private router:Router) { }

  ngOnInit(): void {
    this.mostrarDatos();
  }

  mostrarDatos() {
    this.serviciodatabase.obtenerDatosTecnologia().subscribe(data =>{
      console.log(data);
      this.miTecnologia=data;
    })

  }

  eliminarTecnologia(tecnologia:TecnologiasI) {
    this.serviciodatabase.borrarTecnologia(tecnologia).subscribe(() => {
      this.miTecnologia = this.miTecnologia.filter(t => t.id_tecnologias !== tecnologia.id_tecnologias)
    });
  }

  addTech() {
    this.router.navigate(['porfolio/tecnologiasave']);
  }
  
}
