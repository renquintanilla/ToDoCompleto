import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea.models';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() tareas: Tarea[];

  constructor() { 
    this.tareas = [];
  }

  ngOnInit(): void {
  }

  onClick(pTarea: Tarea){
    pTarea.completa = !pTarea.completa;
  }

  onClickBorrar(indice: any){
    this.tareas.splice(indice, 1);
  }
}
