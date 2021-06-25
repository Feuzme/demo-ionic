import { Component, OnInit } from '@angular/core';
import { CatService } from '../../services/cat.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss'],
})
export class CatsComponent implements OnInit {

  catResponse = {};

  constructor(
    private service : CatService
  ) { }

  ngOnInit() {
    this.refreshCat();
  }

  refreshCat(){
    this.service.getCats().subscribe((resp : any) => {
      console.log(resp);
      //le serveur repond avec un tableau
      this.catResponse = resp[0];
    });
  }

}
