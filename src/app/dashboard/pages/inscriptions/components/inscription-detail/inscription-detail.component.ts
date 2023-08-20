import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { Store } from '@ngrx/store';
import { InscriptionActions } from '../../store/inscription.actions';
import { selectInscriptionDetailCourse, selectInscriptionDetailtStudent } from '../../store/inscription.selectors';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-inscription-detail',
  templateUrl: './inscription-detail.component.html',
  styleUrls: ['./inscription-detail.component.scss']
})
export class InscriptionDetailComponent implements OnInit {

  student$: Observable<string | undefined>;
  course$: Observable<string | undefined>;
  id:number = 0;

    constructor(private store: Store,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private notifier: NotifierService){    
    this.student$ = this.store.select(selectInscriptionDetailtStudent);
    this.course$ = this.store.select(selectInscriptionDetailCourse);
  }

  ngOnInit(): void {
    if (!Number(this.activatedRoute.snapshot.params['id'])) {
      this.router.navigate(['dashboard', 'inscriptions']);
      this.notifier.showError(`${this.activatedRoute.snapshot.params['id']} no es un ID valido`);
    } else {
      this.id = Number(this.activatedRoute.snapshot.params['id']);      
      this.store.dispatch(InscriptionActions.loadInscriptionDetail({id:this.id}));
    }        
  }

}
