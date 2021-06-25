import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

const URL = `${environment.weatherURL}?appid=${environment.weatherAPIKey}&lang=fr&units=metric&q=`;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http : HttpClient
  ) { }

    getWeather(ville: string){
      return this.http.get(URL +""+ ville);//TODO add parameter ville
    }
}
