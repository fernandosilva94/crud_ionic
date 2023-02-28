package com.ionic.crudionic.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class UsuarioDto {

  @NotBlank
  @Size(max = 500)
  private String nome;

  @NotBlank
  @Size(min = 5)
  private String email;

  @NotBlank
  @Size(min = 4)
  private String senha;
}
