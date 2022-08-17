import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-tecnologias-form',
  templateUrl: './tecnologias-form.component.html',
  styleUrls: ['./tecnologias-form.component.css']
})
export class TecnologiasFormComponent implements OnInit {
  datosTecnologia:any
  editarTecForm = new FormGroup ({
    'id_tecnologias': new FormControl(''),
    'lenguaje_framework': new FormControl(''),
    'descripcion': new FormControl('')
  })

  constructor(private databaseservice:DatabaseService,
    private activatedroute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    let tecnologiaid = this.activatedroute.snapshot.paramMap.get('id_tecnologias');
    this.databaseservice.obtenerTecnologia(tecnologiaid).subscribe(data => {
      this.datosTecnologia=data;
      this.editarTecForm.setValue({
        'id_tecnologias': this.datosTecnologia.id_tecnologias,
        'lenguaje_framework': this.datosTecnologia.lenguaje_framework,
        'descripcion': this.datosTecnologia.descripcion
      })
    })
  }

  formularioEditarTec(tecnologia:any) {
    this.databaseservice.editarTecnologia(tecnologia).subscribe();
    this.router.navigate(['porfolio']);
  }
  
  backPorfolio() {
    this.router.navigate(['porfolio']);
  }

}
