import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario-service.service';
import { UsuarioModel } from './../models/UsuarioModel';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.scss'],
})
export class CriarUsuarioComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService
  ) {
    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit() {}

  onSubmit(): void {
    const nome = this.formGroup.get('nome')?.value;
    const email = this.formGroup.get('email')?.value;
    const senha = this.formGroup.get('senha')?.value;
    const usuario: UsuarioModel = { nome, email, senha };
    console.log("dados do usuario: ",usuario);

    this.usuarioService.salvarUsuario(usuario).subscribe({
      next: (usuarioSalvo: UsuarioModel) => {
        console.log('Usuário salvo com sucesso!', usuarioSalvo);
      },
      error: (erro) => {
        console.error('Erro ao salvar usuário:', erro);
      },
      complete: () => {
        alert('Operação concluída.');
        location.reload();
      }
    });
  }

  btnVoltar() {
    this.router.navigate(['home']);
  }
}
