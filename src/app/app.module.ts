import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AngularFireModule } from '@angular/fire'; //firebase
import { environment } from '../environments/environment'; //environment, que firebase necesita
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { SubidaComponent } from './componentes/subida/subida.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LogeoComponent } from './componentes/logeo/logeo.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { AreaDeUsuarioComponent } from './componentes/area-de-usuario/area-de-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    SubidaComponent,
    LogeoComponent,
    RegistrarComponent,
    AreaDeUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), /*hay que agregar esto para que funcione firebase*/
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
