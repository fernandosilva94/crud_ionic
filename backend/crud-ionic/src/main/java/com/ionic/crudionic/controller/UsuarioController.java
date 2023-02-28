package com.ionic.crudionic.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ionic.crudionic.dtos.UsuarioDto;
import com.ionic.crudionic.models.UsuarioModel;
import com.ionic.crudionic.services.UsuarioService;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/usuario")
public class UsuarioController {
  @Autowired
  private UsuarioService usuarioService;

  @PostMapping
  public ResponseEntity<Object> salvarUsuario(@RequestBody @Valid UsuarioDto usuarioDto) {
    var usuarioModel = new UsuarioModel();
    BeanUtils.copyProperties(usuarioDto, usuarioModel);

    return ResponseEntity.status(HttpStatus.OK).body(usuarioService.save(usuarioModel));
  }

  @GetMapping
  public ResponseEntity<List<UsuarioModel>> getAllUsuario() {
    return ResponseEntity.status(HttpStatus.OK).body(usuarioService.findAll());
  }
}
