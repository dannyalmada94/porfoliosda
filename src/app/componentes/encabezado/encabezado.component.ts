import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/servicios/database.service';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  persona:any=[];

  constructor(private userService:UserService,
      private router:Router,
      private serviciodatabase:DatabaseService)
       { }
  
    ngOnInit(): void {
      this.mostrarDatos();
    }
  
    signOut() {
      this.userService.salir()
      .then(()=> {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
    }
    mostrarDatos() {
      this.serviciodatabase.obtenerDatosPersona().subscribe(data =>{
        this.persona=data;
      })
    }
  
  }

