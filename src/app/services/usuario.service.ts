import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../interfaces/login-form';
import { RegisterForm } from '../interfaces/register-form.interface';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  crearUsuario(formData:RegisterForm){
    return this.http.post(`${base_url}/usuarios`, formData);
  }


  login(formData:LoginForm){
    return this.http.post(`${base_url}/login`, formData)
    .pipe(
      map((resp:any)=>{
        console.log(resp);
        localStorage.setItem('id', resp.id);
        localStorage.setItem('token', resp.token);
        localStorage.setItem('usuario',JSON.stringify(resp.usuario));

        return true;
      })
      )
  }




}
