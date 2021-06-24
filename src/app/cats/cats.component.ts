import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss'],
})
export class CatsComponent implements OnInit {

  constructor(
    private service : CatService
  ) { }

  ngOnInit() {
    this.service.getCats().subscribe((resp)=>{
      console.log(resp);
    });
  }

}
