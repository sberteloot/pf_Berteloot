import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { Store } from '@ngrx/store';
import { InscriptionActions } from '../../store/inscription.actions';
import { selectInscriptionDetailCourse, selectInscriptionDetailExists, selectInscriptionDetailtStudent } from '../../store/inscription.selectors';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-inscription-detail',
  templateUrl: './inscription-detail.component.html',
  styleUrls: ['./inscription-detail.component.scss']
})
export class InscriptionDetailComponent implements OnInit {

  student$: Observable<string | undefined>;
  course$: Observable<string | undefined>;
  detailExists$: Observable<boolean>;
  id:number = 0;

    constructor(private store: Store,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private notifier: NotifierService){    
    this.student$ = this.store.select(selectInscriptionDetailtStudent);
    this.course$ = this.store.select(selectInscriptionDetailCourse);
    this.detailExists$ = this.store.select(selectInscriptionDetailExists);
  }

  ngOnInit(): void {
    if (!Number(this.activatedRoute.snapshot.params['id'])) {
      this.router.navigate(['dashboard', 'inscriptions']);
      this.notifier.showError(`${this.activatedRoute.snapshot.params['id']} no es un ID valido`);
    } else {
      this.id = Number(this.activatedRoute.snapshot.params['id']);      
      this.store.dispatch(InscriptionActions.loadInscriptionDetail({id:this.id}));

      this.detailExists$.pipe(take(1)).subscribe({
        next : (existe) => {
          if(!existe) {
            this.notifier.showError("No se encontró la inscripción con el Id " + this.id);
            this.router.navigate(['dashboard', 'inscriptions']);
          } 
        }
      })

    }        
  }

}
