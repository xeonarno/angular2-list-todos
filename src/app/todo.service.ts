import { Injectable } from '@angular/core';
 
const KEY:string = 'TODOS';

@Injectable()
export class TodoService {

  constructor() 
  {
     // on regarde si on a une liste de Todo en mémoire dans le navigateur
     if(localStorage.getItem(KEY) === null 
     || localStorage.getItem(KEY) == undefined)
     {
          //on crée une fausse liste de départ
                console.log("No todos found... create new ones");
                var todos = [
                    {text:"Angular à faire"},
                    {text:"Feter mon anniv"},
                    {text:"dormir"}
                ];
            localStorage.setItem(KEY,JSON.stringify(todos));
        }else{
           // on a rien à faire, la liste est déjà là 
            console.log("found todos");
        }
   }

   // on récupère la todos dans le stockage et on le formate en tableau
    getTodos()
    {
      return JSON.parse(localStorage.getItem(KEY));
    }
    // sauvegarde des todos dans le navigateur
    saveTodos(todos)
    {
      localStorage.setItem(KEY,JSON.stringify(todos));
    }

    addTodo(newTodo)
    {
      var todos = this.getTodos();
      // je cherche dans la liste de Todos si elle existe déjà 
      // si je n'ai pas de todo identique, j'ajoute la todo à la liste
      if(!todos.some(todo=>todo.text == newTodo.text))
      {
        // si je n'ai pas de todo identique, j'ajoute la todo à la liste
        todos.push(newTodo);
      }
      this.saveTodos(todos);
    }

    updateTodo(oldText,text)
    {
      var todos = this.getTodos();
      // on cherche la todo existant et on la remplace
      todos.map(todo => {
        if(todo.text == oldText) todo.text = text;
      });
      this.saveTodos(todos);
    }

    deleteTodo(todo_delete)
    {
      var todos = this.getTodos();
      // on filtre le tableau et on le récupère
      todos = todos.filter(todo=>todo.text != todo_delete.text);
      this.saveTodos(todos);
    }

}
