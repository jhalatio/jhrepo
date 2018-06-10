import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titulos: ITitulo[];
  titulo: 'Bienvenidos';

  constructor() { }

  ngOnInit() {
    this.titulos = this.getTitulos();
  }

  getTitulos(): ITitulo[] {
    return [{
      id: 1,
      title: 'Titulo 1',
      description: 'Contenido del título 1'
    }, {
      id: 2,
      title: 'Titulo 2',
      description: 'Contenido del título 2'
    }, {
      id: 3,
      title: 'Titulo 3',
      description: 'Contenido del título 3'
    }];
  }

}

interface ITitulo {
  id: number;
  title: string;
  description?: string;
}
