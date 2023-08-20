import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { InscriptionActions } from './store/inscription.actions';
import { IInscription } from './models/inscription';
import { selectInscriptions } from './store/inscription.selectors';
import { MatDialog } from '@angular/material/dialog';
import { InscriptionDialogComponent } from './components/inscription-dialog/inscription-dialog.component';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.scss']
})
export class InscriptionsComponent implements OnInit {

  displayedColumns = ['id', 'student', 'course'];
  inscriptions$: Observable<IInscription[]>;

  constructor(private store: Store,
              private inscriptionDialog: MatDialog) {
    this.inscriptions$ = this.store.select(selectInscriptions);
  }

  ngOnInit() : void {
    this.store.dispatch(InscriptionActions.loadInscriptions());
  }

  openDialog(){
    this.inscriptionDialog
      .open(InscriptionDialogComponent, {panelClass: 'inscription__dialog__panel'})
      .afterClosed()
      .subscribe({
        next : (student) => {
          if(student){
            /*this.studentsService.insertStudent({
              name: student.name,
              email: student.email,
              surname: student.surname,
              birth: student.birth
            })*/
          }
        }
      });
  }
}
