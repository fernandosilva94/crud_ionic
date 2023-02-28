package com.ionic.crudionic.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ionic.crudionic.Repository.UsuarioRepository;
import com.ionic.crudionic.models.UsuarioModel;

import jakarta.transaction.Transactional;

@Service
public class UsuarioService {

  @Autowired
  private UsuarioRepository usuarioRepository;

  @Transactional
  public UsuarioModel save(UsuarioModel usuarioModel) {
    return usuarioRepository.save(usuarioModel);
  }

  public List<UsuarioModel> findAll() {
    return usuarioRepository.findAll();
  }
}
