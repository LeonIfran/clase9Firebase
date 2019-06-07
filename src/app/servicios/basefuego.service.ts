import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class BasefuegoService {

  constructor(private _Auth: AngularFireAuth) {}

  public crearUsuario(user: string, pass: string){
    return this._Auth.auth.createUserWithEmailAndPassword(user, pass);
  }
  public loguear(user: string, pass: string){
    return this._Auth.auth.signInWithEmailAndPassword(user,pass);
  }
}
