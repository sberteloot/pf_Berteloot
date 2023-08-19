import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { RoutedataService } from 'src/app/core/services/routedata.service';
import { filter } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input()
  public drawer?: MatDrawer;

  title:string = "Home";
  authUserDisplay : string | null;

constructor(private router: Router, 
            private routeDataService: RoutedataService,
            private authService: AuthService){
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(_ => {
      this.title = this.routeDataService.get()["title"]
    });              

    this.authUserDisplay = this.authService.getAuthUserDisplay();

  }

}