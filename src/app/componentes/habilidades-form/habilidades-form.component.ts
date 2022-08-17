import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-habilidades-form',
  templateUrl: './habilidades-form.component.html',
  styleUrls: ['./habilidades-form.component.css']
})
export class HabilidadesFormComponent implements OnInit {
  datosHabilidad:any;
  editarHabForm = new FormGroup ({
    'id_habilidades': new FormControl(''),
    'tipo_habilidad': new FormControl(''),
    'descripcion': new FormControl('')
  })

  constructor(private databaseservice:DatabaseService,
              private activatedroute:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    let habilidadid = this.activatedroute.snapshot.paramMap.get('id_habilidades');
    this.databaseservice.obtenerHabilidad(habilidadid).subscribe(data => {
      this.datosHabilidad=data;
      this.editarHabForm.setValue({
        'id_habilidades': this.datosHabilidad.id_habilidades,
        'tipo_habilidad': this.datosHabilidad.tipo_habilidad,
        'descripcion': this.datosHabilidad.descripcion
      })
    })
  }

  backPorfolio() {
    this.router.navigate(['porfolio']);
  }

  formularioEditarHab(habilidad:any) {
    this.databaseservice.editarHabilidad(habilidad).subscribe();
    this.router.navigate(['porfolio']);
  }

}
