import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// on importe les composants présents sur l'app
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';

// on importe les services
import {TodoService } from "./todo.service"

@NgModule({
  // on déclare les composants pour pouvoir les utiliser
  declarations: [
    AppComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // on déclare son service pour que chaque composant l'utilise
  providers: [TodoService],
  // point de départ de l'app
  bootstrap: [AppComponent]
})
export class AppModule { }
