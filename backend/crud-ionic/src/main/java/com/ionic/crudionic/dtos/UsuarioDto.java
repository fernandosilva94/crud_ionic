package com.ionic.crudionic.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

public class UsuarioDto {

  @NotEmpty
  @NotBlank
  @Size(max = 500)
  private String nome;

  @NotBlank
  @Size(min = 5)
  private String email;

  @NotBlank
  @Size(min = 4)
  private String senha;

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getSenha() {
    return senha;
  }

  public void setSenha(String senha) {
    this.senha = senha;
  }
}
