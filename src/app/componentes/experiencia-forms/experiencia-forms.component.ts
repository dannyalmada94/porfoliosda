import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/servicios/database.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ExperienciaI } from 'src/app/Experiencia';

@Component({
  selector: 'app-experiencia-forms',
  templateUrl: './experiencia-forms.component.html',
  styleUrls: ['./experiencia-forms.component.css']
})
export class ExperienciaFormsComponent implements OnInit {
  datosExperiencia:any;
  editarExpForm = new FormGroup({
    'id_experiencia': new FormControl(''),
    'modalidad': new FormControl(''),
    'nombre_empresa': new FormControl(''),
    'descripcion': new FormControl('')
  });


  constructor(private router:Router,
              private activatedroute:ActivatedRoute,
              private databaseservice:DatabaseService) { }

  ngOnInit(): void {
    let experienciaid = this.activatedroute.snapshot.paramMap.get('id_experiencia');
    this.databaseservice.obtenerExperiencia(experienciaid).subscribe(data => {
      this.datosExperiencia= data;
      this.editarExpForm.setValue({
        'id_experiencia': this.datosExperiencia.id_experiencia,
        'modalidad': this.datosExperiencia.modalidad,
        'nombre_empresa': this.datosExperiencia.nombre_empresa,
        'descripcion': this.datosExperiencia.descripcion
      });
    })
  }

  backPorfolio() {
    this.router.navigate(['porfolio']);
  }

  formularioEditarExp(datosExperiencia:any) {
    this.databaseservice.editarExperiencia(datosExperiencia).subscribe();
    this.router.navigate(['porfolio']);
    }
}

