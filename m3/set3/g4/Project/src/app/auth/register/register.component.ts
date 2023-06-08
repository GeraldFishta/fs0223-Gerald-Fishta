import { Component } from '@angular/core';
import { Register } from 'src/app/interface/register';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  constructor(
    private authSvc: AuthService
  ){

  }

  data:Register = {
    email: '',
    password: '',
    name: '',
    surname: ''
  };

  register(){
    this.authSvc.signUp(this.data)
    .subscribe(accessData => {
      alert(accessData.user.name)
    })
  }

}
