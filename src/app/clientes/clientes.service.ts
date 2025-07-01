import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Cliente {
  id: number;
  nombre: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  // Datos simulados
  private clientes: Cliente[] = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan.perez@ejemplo.com'},
    { id: 2, nombre: 'María Gómez', email: 'maria.gomez@ejemplo.com'},
    { id: 3, nombre: 'Luis Rodríguez', email: 'luis.rodriguez@ejemplo.com'}
  ];


  // Método que simula llamada HTTP y devuelve un observable
  getClientes(): Observable<Cliente[]>{
    return of(this.clientes);
  }
}
