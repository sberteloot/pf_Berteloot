import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { InscriptionActions } from './store/inscription.actions';
import { IInscription } from './models/inscription';
import { selectInscriptions } from './store/inscription.selectors';
import { MatDialog } from '@angular/material/dialog';
import { InscriptionDialogComponent } from './components/inscription-dialog/inscription-dialog.component';
import { ConfirmdialogComponent } from 'src/app/shared/components/confirmdialog/confirmdialog.component';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.scss']
})
export class InscriptionsComponent implements OnInit {

  displayedColumns = ['id', 'student', 'course', 'actions'];
  inscriptions$: Observable<IInscription[]>;

  constructor(private store: Store,
              private inscriptionDialog: MatDialog,
              private confirmDialog: MatDialog) {
    this.inscriptions$ = this.store.select(selectInscriptions);
  }

  ngOnInit() : void {
    this.store.dispatch(InscriptionActions.loadInscriptions());
  }

  openDialog(){
    this.inscriptionDialog
      .open(InscriptionDialogComponent, {panelClass: 'inscription__dialog__panel'})
  }

  onDeleteInscription(inscription : IInscription){
    this.showConfirmDialog(inscription);
  }

  showConfirmDialog(inscription : IInscription): void {
    this.confirmDialog
      .open(ConfirmdialogComponent, {
        data: `¿Está seguro que desea desinscribir a
          ${ inscription.student.name + " " + inscription.student.surname } 
          del curo ${inscription.course.name}?`
      })
      .afterClosed()
      .subscribe((confirm: Boolean) => {
        if(confirm){
          this.store.dispatch(InscriptionActions.deleteInscription({id:inscription.id}))
        }
      });
  }  

  onDetailInscription(inscription : IInscription){
    //this.router.navigate(['dashboard/students', student.id]);
  }

}
