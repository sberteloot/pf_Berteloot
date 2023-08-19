import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  userAuthIsAdmin$: Observable<boolean>;

  constructor(private router : Router, private authService: AuthService){
    this.userAuthIsAdmin$ = this.authService.isAdmin();
  }

  logout() : void {
    localStorage.clear();
    this.router.navigate(['auth/login']);
  }
}
