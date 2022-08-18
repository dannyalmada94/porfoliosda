import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-proyectos-form',
  templateUrl: './proyectos-form.component.html',
  styleUrls: ['./proyectos-form.component.css']
})
export class ProyectosFormComponent implements OnInit {
  datosProyecto:any
  editarProyForm = new FormGroup ({
    'id_proyecto': new FormControl(''),
    'nombre_proyecto': new FormControl(''),
    'descripcion': new FormControl('')
  })

  constructor(private databaseservice:DatabaseService,
    private activatedroute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    let proyectoid = this.activatedroute.snapshot.paramMap.get('id_proyecto');
    this.databaseservice.obtenerProyecto(proyectoid).subscribe(data => {
      this.datosProyecto=data;
      this.editarProyForm.setValue({
        'id_proyecto': this.datosProyecto.id_proyecto,
        'nombre_proyecto': this.datosProyecto.nombre_proyecto,
        'descripcion': this.datosProyecto.descripcion
      })
    })
  }

  formularioEditarProy(proyecto:any) {
    this.databaseservice.editarProyecto(proyecto).subscribe();
    this.ngOnInit();
    this.router.navigate(['porfolio']);
  }

  backPorfolio() {
    this.router.navigate(['porfolio']);
  }

}
