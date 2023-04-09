import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ActloginService {

  constructor(private http:HttpClient) { }

  doLogin(usuario:string,contrasena:string){
    return this.http.get('http://132.247.184.65/api/endPoint?action=activity.login&usuario='+usuario+'&contraseña='+contrasena);
  }


}
