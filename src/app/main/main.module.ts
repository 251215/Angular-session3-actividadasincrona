import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperacionesComponent } from './operaciones/operaciones.component';



@NgModule({
  declarations: [
    OperacionesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
   OperacionesComponent 
  ]
})
export class MainModule { }
