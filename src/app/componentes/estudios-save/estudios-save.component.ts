import { Component, OnInit } from '@angular/core';
import { EstudiosI } from 'src/app/EstudiosI';
import { DatabaseService } from 'src/app/servicios/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudios-save',
  templateUrl: './estudios-save.component.html',
  styleUrls: ['./estudios-save.component.css']
})
export class EstudiosSaveComponent implements OnInit {
  miEducacion: EstudiosI [] = [];

  constructor(private databaseservice:DatabaseService,
              private router:Router) { }

  ngOnInit(): void {
  }
  agregarNuevaEducacion(educacion:EstudiosI) {
    this.databaseservice.agregarEducacionDB(educacion).subscribe((educacion) => {
      this.miEducacion.push(educacion);
      this.router.navigate(['/porfolio']);
    })
    
  }

}
