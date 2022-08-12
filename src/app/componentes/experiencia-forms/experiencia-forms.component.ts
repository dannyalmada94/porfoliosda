import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia-forms',
  templateUrl: './experiencia-forms.component.html',
  styleUrls: ['./experiencia-forms.component.css']
})
export class ExperienciaFormsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  backPorfolio() {
    this.router.navigate(['porfolio']);
  }
}
