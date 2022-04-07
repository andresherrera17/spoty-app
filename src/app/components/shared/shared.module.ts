import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    LoadingComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
