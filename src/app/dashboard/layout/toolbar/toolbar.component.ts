import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { RoutedataService } from 'src/app/core/services/routedata.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input()
  public drawer?: MatDrawer;

  title:string = "Home";

constructor(private router: Router, 
            private routeDataService: RoutedataService){
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(_ => {
      this.title = this.routeDataService.get()["title"]
    }        
    );              
  }
}