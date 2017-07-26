// app.module.ts
import { Routes } from "@angular/router";
import { ListaFrasesComponent } from './lista-frases/lista-frases.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component:  HomeComponent },
  { path: 'frases/:id',  component:  ListaFrasesComponent },
  { path: 'about', component: AboutComponent }
];
