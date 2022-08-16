import { Component, OnInit } from '@angular/core';
import { HabilidadI } from 'src/app/HabilidadI';
import { DatabaseService } from 'src/app/servicios/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habilidades-save',
  templateUrl: './habilidades-save.component.html',
  styleUrls: ['./habilidades-save.component.css']
})
export class HabilidadesSaveComponent implements OnInit {
  miHabilidad: HabilidadI [] = [];

  constructor(private databaseservice:DatabaseService,
              private router:Router) { }

  ngOnInit(): void {
  }

  agregarNuevaHabilidad(habilidad:HabilidadI) {
    this.databaseservice.agregarHabilidadDB(habilidad).subscribe((habilidad) => {
      this.miHabilidad.push(habilidad);
      this.router.navigate(['/porfolio']);
    })
  }
}
