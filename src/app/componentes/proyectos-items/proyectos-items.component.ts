import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProyectosI } from 'src/app/ProyectosI';
import { Router } from '@angular/router';


@Component({
  selector: 'app-proyectos-items',
  templateUrl: './proyectos-items.component.html',
  styleUrls: ['./proyectos-items.component.css']
})
export class ProyectosItemsComponent implements OnInit {
  @Input() proyecto:any

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
