import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todo.service";

@Component({
  moduleId: "moduleId", // permet de faire un chemin relatif
  selector: 'app-todos', // <app-todos></app-todos>
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css']
})
export class TodosComponent implements OnInit 
{
    todos; // la liste de todo 
    todo_name:string = ""; // le text dans l'input 
    old_todo_name:string = ""; // la mémoire d'un todo lors d'un update
    appState:string = "default"; // default ou edit

    // on importe le service de données injectable
    // équivalent : this.todoService = todoService;
    constructor(private todoService:TodoService) { }

    // on charge les données du service à l'initialisation composant
    // en faisant cela on évite des blocages par le chargement de données
    ngOnInit() {
      this.todos = this.todoService.getTodos();
    }

    // ajouter une todo à la liste
    addTodo()
    {
      // on n'ajoute pas de todo si le champ de texte est vide
      if(this.todo_name == "") return;
      this.todoService.addTodo({text:this.todo_name});
      this.todos = this.todoService.getTodos();
      // je remets à zéro mon champ de texte
      this.todo_name = "";
    }

    // permet d'activer le mode d'édition d'une todo
    editTodo(todo)
    {
      this.appState = "edit";
      // garde en mémoire la valeur de la Todo
      this.old_todo_name = todo.text;
      // permet de charger la todo dans l'input
      this.todo_name = todo.text;
    }

    // met à jour la Todo modifiée en mode Edit
    updateTodo()
    {
      // todo vide == pas de todo
      if(this.todo_name == "") return;
      // on met à jour les données du service
      this.todoService.updateTodo(this.old_todo_name,this.todo_name);
      // on récupère une liste à mise à jour
      this.todos = this.todoService.getTodos();

      // on remet à zéro l'état de l'app pour pouvoir ajouter des todos
      this.appState = "default";
      // on remet à zéro le champ texte
      this.todo_name = "";
    }

    // supprime la todo 
    deleteTodo(todo)
    {
        // on supprime la todo en trop
        this.todoService.deleteTodo(todo);
        // on remet à jour la liste de todo
        this.todos = this.todoService.getTodos();
    }
}