import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from  './home/home.component';
import { AboutComponent } from  './about/about.component';
import { ContactComponent } from  './contact/contact.component';


const routes: Routes = [
  {
  path:  'home',
  component:  HomeComponent, 
  pathMatch: 'full',
  data: {
    title: 'Home',
    descrption: 'Home portfolio diseñadora web',
    ogTitle: 'diseñadora web contacto en redes sociales',
  }
  },
  {
  path:  'about',
  component:  AboutComponent,
  data: {
    title: 'Sobre mí',
    descrption: 'diseñadora web datos personales',
    robots: 'noindex, nofollow',
    ogTitle: 'datos personales y resumen',
  }
  },
  {
  path:  'contact',
  component:  ContactComponent,
  data: {
    title: 'Contacto',
    descrption: 'diseñadora web formulario de contacto',
  }
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
