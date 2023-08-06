import { TestBed } from "@angular/core/testing"
import { LoginComponent } from "./login.component"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from "../../auth.service";
import { MatIconModule } from "@angular/material/icon";

describe('LoginComponent', () => {
  let component: LoginComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [MatFormFieldModule, MatInputModule, MatIconModule, HttpClientTestingModule]
    })
    component = TestBed.createComponent(LoginComponent).componentInstance
  })

  it('El formulario debe ser invalido si los campos son nulos', () => {
    component.emailFormControl.setValue(null);
    component.passwordFormControl.setValue(null);

    expect(component.loginFormGroup.invalid).toBeTrue();
  })


  it('Al llamar login y el formulario es invalido, se debe llamar el metodo markAllAsTouched de la propiedad loginForm', () => {
    component.emailFormControl.setValue(null);
    component.passwordFormControl.setValue(null);

    expect(component.loginFormGroup.invalid).toBeTrue();

    const spyOfMarkAllAsTouched = spyOn(component.loginFormGroup, 'markAllAsTouched');
    component.login()

    expect(spyOfMarkAllAsTouched).toHaveBeenCalled() 
  })

  it('Al llamar login y el formulario SI ES VALIDO, debe haberse llamado el metodo login del AuthService', () => {
    const authService = TestBed.inject(AuthService);

    component.emailFormControl.setValue('admin@gmail.com');
    component.passwordFormControl.setValue('1234567');

    expect(component.loginFormGroup.valid).toBeTrue();
    const spyOnAuthServiceLogin = spyOn(authService, 'login');
    component.login();
    expect(spyOnAuthServiceLogin).toHaveBeenCalled();
  });
})
