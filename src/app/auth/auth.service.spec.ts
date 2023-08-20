import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing"
import { Router } from "@angular/router"
import { MockProvider } from 'ng-mocks';
import { AuthService } from "./auth.service";
import { IUser } from "../dashboard/pages/users/models/user";
import { environment } from "src/environments/environment";

describe('AuthService', () => {
  let service: AuthService;
  let httpController: HttpTestingController;
  let userTest : IUser = {
    "name": "Admin",
    "email": "admin@gmail.com",
    "surname": "Administrador",
    "password": "1234567",
    "token": "gYRCf3aXyiSxLxooYdT1",
    "role": "USER",
    "id": 1
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        MockProvider(Router)
      ]
    });
    service = TestBed.inject(AuthService);
    httpController = TestBed.inject(HttpTestingController);
  })

  it('Si pasa el login tengo que recibir un token', () => {

    const mockResponse: IUser[] = [userTest];
    service.login(userTest.email, userTest.password);

    httpController.expectOne({
      method: 'GET',
      url: `${environment.baseApiUrl}users?email=${userTest.email}&password=${userTest.password}`
    }).flush(mockResponse)

    service.getAuthObservable().subscribe({
      next: (authUser) => {
        expect(authUser).toBeTruthy();
        expect(authUser?.token).toEqual(userTest.token);
      }
    })
  })

  it('Si el login recibe credenciales inválidas se tiene que mostrar una alerta y tenqo que recibir un usuario nulo', () => {

    const mockResponse: IUser[] = [];
    service.login(userTest.email, 'password');

    httpController.expectOne({
      method: 'GET',
      url: `${environment.baseApiUrl}users?email=${userTest.email}&password=password`
    }).flush(mockResponse)

    service.getAuthObservable().subscribe({
      next: (authUser) => {
        expect(authUser).not.toBeTruthy();
      }
    })
  })

})

