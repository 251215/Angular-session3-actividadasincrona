import { Component } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent {
title= "array";
titulo= "Framework Angular";

//cursos!:string[];
cursos = ['javascript','c#'];
addCurso(nombrec:String){
  this.cursos.push(String(nombrec));
  //alert(this.cursos)
}
}
