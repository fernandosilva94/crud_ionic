import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario-service.service';
import { UsuarioModel } from './../models/UsuarioModel';
import { ValidatorsService } from './../validators.service';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.scss'],
})
export class CriarUsuarioComponent implements OnInit {
  formGroup: FormGroup;
  isPasswordVisible: boolean = false;
  isVisible: boolean = false;
  isVisibleCampos: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService,
    private validatorsService: ValidatorsService
  ) {
    this.formGroup = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(4)]],
      confirmarSenha: ['', Validators.required],
    }, {
      validator: this.validatorsService.matchingPasswords('senha', 'confirmarSenha')
    });
  }

  ngOnInit() {}

  togglePasswordVisibility() {
    const passwordInput = document.getElementById('password-input') as HTMLInputElement;
    this.isPasswordVisible = !this.isPasswordVisible;
    passwordInput.setAttribute('type', this.isPasswordVisible ? 'text' : 'password');
  }

  onSubmit(): void {
    this.isVisible = false;
    const nome = this.formGroup.get('nome')?.value;
    const email = this.formGroup.get('email')?.value;
    const senha = this.formGroup.get('senha')?.value;
    const confirmarSenha = this.formGroup.get('confirmarSenha')?.value;
    const usuario: UsuarioModel = { nome, email, senha };

    console.log("dados do usuario: ",usuario);
    if (nome || nome.trim().length > 0 || email || email.trim().length > 0) {
      this.isVisibleCampos = false;

      if (senha == confirmarSenha && senha != "" && confirmarSenha != "") {
        this.isVisible = false;
        this.usuarioService.salvarUsuario(usuario).subscribe({
          next: (usuarioSalvo: UsuarioModel) => {
            console.log('Usuário salvo com sucesso!', usuarioSalvo);
          },
          error: (erro) => {
            console.error('Erro ao salvar usuário:', erro);
          },
          complete: () => {
            console.log('Usuario salvo com sucesso.');
            location.reload();
          }
        });
      } else {
        this.isVisible = true;
      }

    } else {
      this.isVisibleCampos = true;
    }

  }

  btnVoltar() {
    this.router.navigate(['home']);
  }
}
