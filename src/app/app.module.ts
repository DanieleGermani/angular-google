import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';   // <-- Import declaration
import { AppComponent } from './app.component';
import { ListaFrasesComponent } from './lista-frases/lista-frases.component';
import { FraseComponent } from './frase/frase.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './routes';
import { HomeComponent } from './home/home.component';
import { CounterService } from '../services/counter.service';
import { AlbertoContadorComponent } from './alberto-contador/alberto-contador.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaFrasesComponent,
    FraseComponent,
    AboutComponent,
    HomeComponent,
    AlbertoContadorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,     // <-- Import Forms Module
    RouterModule.forRoot(routes)
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
