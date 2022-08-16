import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/servicios/database.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-estudios-form',
  templateUrl: './estudios-form.component.html',
  styleUrls: ['./estudios-form.component.css']
})
export class EstudiosFormComponent implements OnInit {
  datosEstudios:any
  editarEstForm = new FormGroup({
    'id_educacion': new FormControl(''),
    'tipo_educacion': new FormControl(''),
    'titulo': new FormControl(''),
    'descripcion': new FormControl('')
  });

  constructor(private router:Router,
              private activatedroute:ActivatedRoute,
              private databaseservice:DatabaseService) { }

  ngOnInit(): void {
    let educacionid = this.activatedroute.snapshot.paramMap.get('id_educacion');
    this.databaseservice.obtenerEducacion(educacionid).subscribe(data => {
      this.datosEstudios=data;
      this.editarEstForm.setValue({
        'id_educacion': this.datosEstudios.id_educacion,
        'tipo_educacion': this.datosEstudios.tipo_educacion,
        'titulo': this.datosEstudios.titulo,
        'descripcion': this.datosEstudios.descripcion
      })
    })
  }


  backPorfolio() {
    this.router.navigate(['/porfolio']);
  }

  editarEducacion(datosEstudios:any) {
    this.databaseservice.editarEducacion(datosEstudios).subscribe();
    this.router.navigate(['/porfolio']);
  }

}
