import { Injectable } from '@angular/core';
import { DatosContacto } from './datos-contacto';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  constructor(private https: HttpClient) { }

  url: string = "https://formspree.io/f/manqbvvy";

  sendEmail(userForm: DatosContacto): Observable<any>{
    return this.https.post(this.url, userForm);
  }
}
