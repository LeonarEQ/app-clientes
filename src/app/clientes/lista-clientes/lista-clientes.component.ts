import { Component, OnInit } from '@angular/core';
import { ClientesService, Cliente } from '../clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss']
})
export class ListaClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clientesService: ClientesService) {}

    ngOnInit(): void {
      // Nos suscribimos al Observable
      this.clientesService.getClientes().subscribe(data => {
        this.clientes = data;
      })
    }
  

}
