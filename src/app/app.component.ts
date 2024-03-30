import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginService } from './servicios/login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'historiaClinicaApp';

  constructor (public loginSvc:LoginService ) { }

  public cerrarSesion():void{
    this.loginSvc.logout();
  }
}
