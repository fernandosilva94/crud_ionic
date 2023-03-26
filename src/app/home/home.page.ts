import { UsuarioService } from './../usuario-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  dados: any[] = [];

  constructor(private usuarioService: UsuarioService) {}
  ngOnInit(): void {
      this.usuarioService.getAllUsuario().subscribe((dados: any) => {
        this.dados = dados;
      });
  }
}
