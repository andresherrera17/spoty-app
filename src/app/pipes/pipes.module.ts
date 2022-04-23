import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoImagenPipe } from './no-imagen.pipe';
import { DomseguroPipe } from './domseguro.pipe';



@NgModule({
  declarations: [
    NoImagenPipe,
    DomseguroPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NoImagenPipe,
    DomseguroPipe
  ]
})
export class PipesModule { }
