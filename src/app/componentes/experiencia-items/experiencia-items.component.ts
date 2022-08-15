import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExperienciaI } from 'src/app/Experiencia';
import { Router, ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-experiencia-items',
  templateUrl: './experiencia-items.component.html',
  styleUrls: ['./experiencia-items.component.css']
})
export class ExperienciaItemsComponent implements OnInit {
  @Input() experiencia:any
  @Output() borrarExperienciaPass:EventEmitter<ExperienciaI> = new EventEmitter();
  constructor(private router:Router,
              private databaseservice:DatabaseService,
              private activatedroute:ActivatedRoute ) { }

  ngOnInit(): void {
  }

  borrarExperiencia(experiencia:ExperienciaI) {
    this.borrarExperienciaPass.emit(experiencia);
  }

  editExperiencia(id_experiencia:any) {
    this.router.navigate(['porfolio/experienciaedit', id_experiencia]);
  }
}
