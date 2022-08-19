import { Component, OnInit } from '@angular/core';
import { ExperienciaI } from 'src/app/Experiencia';
import { DatabaseService } from 'src/app/servicios/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia-edit',
  templateUrl: './experiencia-edit.component.html',
  styleUrls: ['./experiencia-edit.component.css']
})
export class ExperienciaEditComponent implements OnInit {
  datosExperiencia:ExperienciaI[] = [];

  constructor(private databaseservice:DatabaseService,
              private router:Router) { }

  ngOnInit(): void {
  }

  editarExperiencia(datosExperiencia:any) {
    this.databaseservice.editarExperiencia(datosExperiencia).subscribe();
    this.router.navigate(['porfolio']);
  }

}
