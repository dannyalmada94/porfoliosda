import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/servicios/database.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ExperienciaI } from 'src/app/Experiencia';

@Component({
  selector: 'app-experiencia-forms',
  templateUrl: './experiencia-forms.component.html',
  styleUrls: ['./experiencia-forms.component.css']
})
export class ExperienciaFormsComponent implements OnInit {
  //Igualé al tipo de datos "any", que no es lo recomendado, pero al intentar igualarlo a la interface "ExperienciaI"
  //me daba errores que no comprendía del todo bien
  datosExperiencia:any;
  @Output() editarExperienciaPass:EventEmitter<any> = new EventEmitter();
  //Al tener que enviar un body con los mismos párametros que estan en el API para poder completar la solicitud
  //de manera exitosa, creo un nuevo formulario para poder ingresar los datos, con la particularidad de 
  //que ya están precargados los datos de la experiencia seleccionada y se muestran en el template, a excepción
  //del campo "id_experiencia" que no se muestra, para que no sea modificado, pero es requerido en el URL, esta información
  //la envío mediante un evento para que la reciba el componente experiencia-edit y ese componente es el que
  //tiene el método para que lo pueda recibir el método correspondiente del servicio
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
    //En primer lugar muestro en el URL la experiencia a modificar
    let experienciaid = this.activatedroute.snapshot.paramMap.get('id_experiencia');
    //Luego "llamo" a la experiencia que he seleccionado mediante el método en el servicio
    this.databaseservice.obtenerExperiencia(experienciaid).subscribe(data => {
      this.datosExperiencia= data;
      //Después seteo los valores y los envío mediante el método que se comunica con el servicio
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

  //Mediante este método realizo el envío de la información al método presente en el servicio
  formularioEditarExp(datosExperiencia:any) {
    this.editarExperienciaPass.emit(datosExperiencia);
    console.log(datosExperiencia);
    }
}

