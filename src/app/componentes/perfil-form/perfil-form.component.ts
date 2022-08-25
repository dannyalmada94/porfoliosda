import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-perfil-form',
  templateUrl: './perfil-form.component.html',
  styleUrls: ['./perfil-form.component.css']
})
export class PerfilFormComponent implements OnInit {
  datosPersona:any
  editarPersoForm = new FormGroup ({
    'id_persona': new FormControl(''),
    'nombre': new FormControl(''),
    'apellido': new FormControl(''),
    'edad': new FormControl(''),
    'localidad': new FormControl(''),
    'pais': new FormControl(''),
    'profesion_oficio': new FormControl(''),
    'acerca_de_mi': new FormControl('')
  })

  constructor(private databaseservice:DatabaseService,
    private activatedroute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    let personaid = this.activatedroute.snapshot.paramMap.get('id_persona');
    this.databaseservice.obtenerPersona(personaid).subscribe(data => {
      this.datosPersona=data;
      this.editarPersoForm.setValue({
        'id_persona': this.datosPersona.id_persona,
        'nombre': this.datosPersona.nombre,
        'apellido': this.datosPersona.apellido,
        'edad': this.datosPersona.edad,
        'localidad': this.datosPersona.localidad,
        'pais': this.datosPersona.pais,
        'profesion_oficio': this.datosPersona.profesion_oficio,
        'acerca_de_mi': this.datosPersona.acerca_de_mi
      })
    })
  }

  formularioEditarPers(persona:any) {
    this.databaseservice.editarPersona(persona).subscribe();
    this.router.navigate(['porfolio']);
  }

  backPorfolio() {
    this.router.navigate(['porfolio']);
  }

}
