import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

  titre = new FormControl('');

  todos = [
    {titre: 'Faire une todo list', done:false},
    {titre: 'Faire une todo list', done:true}    
  ];
  constructor() { }

  ngOnInit() {}

  ajouterTache(){
    this.todos.push(
      {
        titre:this.titre.value,
        done:false
      }
    );
  }

  check(item :IonItemSliding, index : number){
    this.todos[index].done = !this.todos[index].done
    item.close();
  }

  delete(item :IonItemSliding, index : number){
    this.todos.splice(index);
    item.close();
  }
}
