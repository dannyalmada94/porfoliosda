import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EstudiosI } from 'src/app/EstudiosI';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudios-items',
  templateUrl: './estudios-items.component.html',
  styleUrls: ['./estudios-items.component.css']
})
export class EstudiosItemsComponent implements OnInit {
  @Input() educacion:any
  @Output() educacionElimiarPass:EventEmitter<EstudiosI>=new EventEmitter();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  borrarEducacion(educacion:EstudiosI) {
    this.educacionElimiarPass.emit(educacion);
  }

  editEducacion(id_educacion:EstudiosI) {
    this.router.navigate(['/porfolio/estudioedit', id_educacion]);
  }
}
