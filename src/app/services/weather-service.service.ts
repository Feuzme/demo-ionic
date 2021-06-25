import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

const URL = `${environment.weatherURL}?appid=${environment.weatherAPIKey}&lang=fr&units=metric`;

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
 

  constructor() { }
}
