import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Definimos como é uma tarefa
interface Tarefa {
  texto: string;
  concluida: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div style="text-align:center; margin-top: 50px; font-family: sans-serif;">
      <h1 style="color: #c3002f;">Minha Lista de Tarefas</h1>

      <input
        type="text"
        [(ngModel)]="novaTarefa"
        (keyup.enter)="adicionar()"
        placeholder="O que precisa ser feito?"
      />
      <button (click)="adicionar()" style="cursor: pointer; padding: 5px 10px;">Adicionar</button>

      <ul style="list-style: none; margin-top: 20px; padding: 0;">
        <li
          *ngFor="let t of tarefas; let i = index"
          style="margin-bottom: 10px; font-size: 18px; background: #f4f4f4; padding: 10px; display: flex; justify-content: center; align-items: center; width: 350px; margin-left: auto; margin-right: auto; border-radius: 5px;"
        >
          <input
            type="checkbox"
            [(ngModel)]="t.concluida"
            (change)="salvar()"
            style="margin-right: 15px; cursor: pointer;"
          />

          <span
            [style.textDecoration]="t.concluida ? 'line-through' : 'none'"
            [style.color]="t.concluida ? 'gray' : 'black'"
            style="flex: 1; text-align: left;"
          >
            {{ t.texto }}
          </span>

          <button
            (click)="remover(i)"
            style="color: red; border: none; background: none; cursor: pointer; font-weight: bold;"
          >
            X
          </button>
        </li>
      </ul>

      <p *ngIf="tarefas.length === 0" style="color: gray;">Nada por aqui... adicione uma tarefa!</p>
    </div>
  `,
})
export class AppComponent implements OnInit {
  tarefas: Tarefa[] = []; // Agora é uma lista de objetos
  novaTarefa: string = '';

  ngOnInit() {
    const salvo = localStorage.getItem('minhas_tarefas');
    if (salvo) {
      this.tarefas = JSON.parse(salvo);
    }
  }

  adicionar() {
    if (this.novaTarefa.trim() !== '') {
      // Criamos um objeto com o texto e o estado 'concluida' como falso
      this.tarefas.push({ texto: this.novaTarefa, concluida: false });
      this.novaTarefa = '';
      this.salvar();
    }
  }

  remover(index: number) {
    this.tarefas.splice(index, 1);
    this.salvar();
  }

  salvar() {
    localStorage.setItem('minhas_tarefas', JSON.stringify(this.tarefas));
  }
}
