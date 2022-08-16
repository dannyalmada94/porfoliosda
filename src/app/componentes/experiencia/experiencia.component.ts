import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicios/database.service';
import { ExperienciaI } from 'src/app/Experiencia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  miExperiencia: ExperienciaI [] = [];

  constructor(private serviciodatabase:DatabaseService,
              private router:Router) { }

  //Directamente en el init "llamo" al método para obtener la lista de Experiencias
  ngOnInit(): void {
      this.serviciodatabase.obtenerDatosExperiencia().subscribe(experiencia =>{
        this.miExperiencia=experiencia;
      });
  }

  //Este metodo recibe desde el componente "experiencia-items" la experiencia para poder eliminarla,
  //luego de evocar al metódo en el servicio aplico un filtro para que muestre las experiencias sin la experiencia
  //borrada anteriormente
  borrarExperiencia(experiencia:ExperienciaI) {
    this.serviciodatabase.borrarExperiencia(experiencia).subscribe(() => {
      this.miExperiencia = this.miExperiencia.filter( e => e.id_experiencia !== experiencia.id_experiencia)
    })
  }

  //Este método redirige al componente experiencia que contiene el componente para poder agregar una nueva experiencia
  addExperiencia(){
    this.router.navigate(['porfolio/experienciasave']);
  }

  }
