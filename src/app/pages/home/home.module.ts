import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ArtistaComponent } from './artista/artista.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ChatComponent } from './chat/chat.component';
import { MainComponent } from './main/main.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';
import { SpotifyInterceptor } from 'src/app/interceptors/spotify.interceptor';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChatService } from 'src/app/services/chat.service';


@NgModule({
  declarations: [
    HomeComponent,
    ArtistaComponent,
    BuscarComponent,
    ChatComponent,
    MainComponent,
    TarjetasComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    PipesModule,
    FormsModule
  ],
  providers: [
    SpotifyService,
    ChatService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpotifyInterceptor,
      multi: true
    },
  ]
})
export class HomeModule { }
