import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicios/database.service';
import { ExperienciaI } from 'src/app/Experiencia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia-save',
  templateUrl: './experiencia-save.component.html',
  styleUrls: ['./experiencia-save.component.css']
})
export class ExperienciaSaveComponent implements OnInit {
  miExperiencia: ExperienciaI [] = [];

  constructor(private serviciodatabase:DatabaseService,
              private router:Router) { }

  ngOnInit(): void {
  }

  //Recibo desde el componente hijo y envío la experiencia al método en el servicio, y una vez enviado
  //redirige al componente principal para que aparezca en la lista
  agregarNuevaExperiencia(experiencia:ExperienciaI) {
    this.serviciodatabase.agregarExperienciaDB(experiencia).subscribe((experiencia) =>{
      this.miExperiencia.push(experiencia);
      this.router.navigate(['/porfolio']);
    })
  }

}
