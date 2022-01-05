import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TodoMainComponent } from './components/todo-main.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoMainComponent,
  ],
  exports: [
    TodoMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
