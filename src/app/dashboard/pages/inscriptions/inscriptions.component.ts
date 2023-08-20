import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { InscriptionActions } from './store/inscription.actions';
import { IInscription } from './models/inscription';
import { selectInscriptions } from './store/inscription.selectors';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.scss']
})
export class InscriptionsComponent implements OnInit {

  displayedColumns = ['id', 'student', 'course'];
  inscriptions$: Observable<IInscription[]>;

  constructor(private store: Store) {
    this.inscriptions$ = this.store.select(selectInscriptions);
  }

  ngOnInit() : void {
    this.store.dispatch(InscriptionActions.loadInscriptions());
  }

}
