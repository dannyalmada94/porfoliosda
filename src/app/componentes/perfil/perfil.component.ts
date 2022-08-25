import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicios/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  persona:any=[];

  constructor (private serviciodatabase:DatabaseService,
               private router:Router
               ) {
    
   }
  

  ngOnInit(): void {
      this.serviciodatabase.obtenerDatosPersona().subscribe(data =>{
    this.persona=data;})
}

editPersona(id_persona:any) {
  this.router.navigate(['porfolio/perfiledit', id_persona]);
}
}