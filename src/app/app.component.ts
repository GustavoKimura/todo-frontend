import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService, Tarefa } from './todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private todoService = inject(TodoService);

  tarefas = signal<Tarefa[]>([]);
  novoTitulo = signal('');

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    this.todoService.getTarefas().subscribe((data) => {
      this.tarefas.set(data);
    });
  }

  adicionar() {
    const titulo = this.novoTitulo();
    if (titulo.trim()) {
      this.todoService.addTarefa(titulo).subscribe(() => {
        this.novoTitulo.set('');
        this.carregar();
      });
    }
  }
}
