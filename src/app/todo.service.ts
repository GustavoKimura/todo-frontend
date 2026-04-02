import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Tarefa {
  id?: number;
  titulo: string;
  concluida: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodoService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/todo-backend-1.0.0/api/tarefas';

  getTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiUrl);
  }

  addTarefa(titulo: string): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.apiUrl, { titulo, concluida: false });
  }

  concluirTarefa(id: number): Observable<Tarefa> {
    return this.http.put<Tarefa>(`${this.apiUrl}/${id}`, {});
  }

  deletarTarefa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
