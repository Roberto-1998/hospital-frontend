import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  public formSubmitted=false;

  public loginForm=this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required],
    remember:[false]
  });

  constructor(private router:Router, private fb:FormBuilder, private usuarioService:UsuarioService) { }

 

  login(){
      this.formSubmitted=true;
      console.log(this.loginForm.value);
     /*  this.router.navigateByUrl('/'); */
  
     if(this.loginForm.invalid){
       console.log('Formulario incorrecto')
     }else{
       console.log('Posteando Formulario')
       this.usuarioService.login(this.loginForm.value)
       .subscribe((resp)=>{
            this.router.navigate(['dashboard'])
       }, (err)=>{
         // Si sucede un error
         console.log(err);
         Swal.fire('Error', err.error.msg, 'error');
       })
  
     }
    }

    validarCampos(campo:string):boolean{
      if(this.loginForm.get(campo).invalid && this.formSubmitted){
        return true;
      }else{
        return false;
      }
    }


}
