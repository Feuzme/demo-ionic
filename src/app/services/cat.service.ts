import { Injectable } from '@angular/core';
//dependance pour le client http
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(
    private http : HttpClient
  ) { }

    getCats(){
      return this.http.get('https://api.thecatapi.com/v1/images/search');
    }
}
