import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restangular } from 'ngx-restangular';


@Injectable({
  providedIn: 'root'
})
export class CardTableService {

  constructor(private http: HttpClient, private restangular: Restangular) { }


  


  getTodoList() {
    let list = this.restangular.all("Effect").getList();
    return list;
  }
  addTodo(todo) {
    return this.restangular.all("Effect").post(todo);
  }
  removeTodo(todo) {
    return todo.remove();
  }


}
