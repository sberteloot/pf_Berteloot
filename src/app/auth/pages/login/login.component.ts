import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  emailFormControl = new FormControl<string | null>(null, [Validators.required, Validators.email]);
  passwordFormControl = new FormControl<string | null>(null, [Validators.required, Validators.minLength(7), Validators.maxLength(15)]);

  loginFormGroup = new FormGroup({
    email : this.emailFormControl,
    password : this.passwordFormControl
  });

  constructor(private authService : AuthService){}

  login() : void {
    
    if(this.loginFormGroup.invalid){
      this.loginFormGroup.markAllAsTouched();
    }else{
      this.authService.login(this.emailFormControl.value || '', this.passwordFormControl.value || '')
    }
  }
}
