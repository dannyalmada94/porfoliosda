import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/servicios/database.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactoI } from 'src/app/ContactoI';

@Component({
  selector: 'app-encabezado-edit',
  templateUrl: './encabezado-edit.component.html',
  styleUrls: ['./encabezado-edit.component.css']
})
export class EncabezadoEditComponent implements OnInit {
  datosContacto:any
  editarContForm = new FormGroup({
    'id_contacto': new FormControl(''),
    'celular': new FormControl(''),
    'email': new FormControl(''),
    'linkedin_url': new FormControl(''),
    'instagram_url': new FormControl(''),
    'facebook_url': new FormControl(''),
    'youtube_url': new FormControl('')
  });

  constructor(private databaseservice:DatabaseService,
              private router:Router) { }

  ngOnInit(): void {
    this.databaseservice.obtenerContacto().subscribe(data => {
      this.datosContacto=data;
      console.log(data);
      this.editarContForm.setValue({
        'id_contacto': this.datosContacto.id_contacto,
        'celular': this.datosContacto.celular,
        'email': this.datosContacto.email,
        'linkedin_url': this.datosContacto.linkedin_url,
        'instagram_url': this.datosContacto.instagram_url,
        'facebook_url': this.datosContacto.facebook_url,
        'youtube_url': this.datosContacto.youtube_url
      })
    })
  }

  editarContacto(contacto:any) {
    this.databaseservice.editarContacto(contacto).subscribe(() =>{
      this.ngOnInit();
    });
    this.router.navigate(['porfolio'])
  }

}
