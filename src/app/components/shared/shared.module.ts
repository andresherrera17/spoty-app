import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';



@NgModule({
  declarations: [
    LoadingComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [AuthService],
  exports: [
    LoadingComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
