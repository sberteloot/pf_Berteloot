import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IInscription, IInscriptionCU } from './models/inscription';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InscriptionsService {

  private url = environment.baseApiUrl + "inscriptions";

  constructor(private httpClient : HttpClient) { }

  getInscriptions(): Observable<IInscription[]> {
    return this.httpClient.get<IInscription[]>(this.url + '?_expand=course&_expand=student')
  }

  addInscription(payload:IInscriptionCU): Observable<IInscription>{
    return this.httpClient.post<IInscription>(this.url, payload);
  }
}
