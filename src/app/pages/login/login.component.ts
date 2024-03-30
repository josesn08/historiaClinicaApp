import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { LoginService } from '../../servicios/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  fomrulario:FormGroup;
  mensajeError:string = '';

  constructor( private builder:FormBuilder, private loginSvc:LoginService, private router:Router){
    this.fomrulario = builder.group({
      username:[''],
      password:['']
    });
  }

  public enviarDatos(){
    const credenciales  = this.fomrulario.value;
    console.log( credenciales );
    this.loginSvc.login(credenciales).subscribe({
      next: datos => this.procesarRespuesta(datos, credenciales),
      error: datos => this.mensajeError = datos
    })

  }

  public procesarRespuesta(datos:any, usuario:Usuario): void{
    this.router.navigateByUrl('/catalogo');
  }

}
