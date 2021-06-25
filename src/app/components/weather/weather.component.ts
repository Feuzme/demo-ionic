import { FormControl } from '@angular/forms';
import { WeatherService } from '../../services/weather-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {

  ville = new FormControl('');

  resultats : any = []
  constructor(
    private service : WeatherService
  ) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather(){
    this.service.getWeather("lille").subscribe((results : any) => {     
      
      this.resultats = results.list
      console.log(this.resultats); 
    })
  }
}
