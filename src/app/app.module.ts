import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiaslistaComponent } from './noticiaslista/noticiaslista.component';
import { NoticiascadastroComponent } from './noticiascadastro/noticiascadastro.component';
import { NoticiaseditarComponent } from './noticiaseditar/noticiaseditar.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [				
    AppComponent,
      NoticiaslistaComponent,
      NoticiascadastroComponent,
      NoticiaseditarComponent,
      NavbarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
