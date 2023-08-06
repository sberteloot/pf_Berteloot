import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  emailFormControl = new FormControl(null, [Validators.required, Validators.email]);
  passwordFormControl = new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(15)]);

  loginFormGroup = new FormGroup({
    email : this.emailFormControl,
    password : this.passwordFormControl
  });

  constructor(private authService : AuthService){}

  login() : void {
    
    if(this.emailFormControl.invalid){
      this.emailFormControl.markAllAsTouched();
    }else{
      this.authService.login(this.emailFormControl.value || '', this.passwordFormControl.value || '')
    }
  }
}
