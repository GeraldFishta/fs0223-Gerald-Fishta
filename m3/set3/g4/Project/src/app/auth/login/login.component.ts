import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Login } from 'src/app/interface/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(
    private authSvc: AuthService
  ){}


  data:Login = {
    email: '',
    password: ''
  }

  login(){
    this.authSvc.login(this.data)
    .subscribe(accessData => {
      alert(`Sei loggato come ${accessData.user.name}`)
    })
  }

}
