package com.ionic.crudionic.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ionic.crudionic.Repository.UsuarioRepository;
import com.ionic.crudionic.dtos.UsuarioDto;
import com.ionic.crudionic.models.UsuarioModel;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;

@Service
public class UsuarioService {

  @Autowired
  private UsuarioRepository usuarioRepository;

  @Transactional
  public UsuarioModel save(UsuarioModel usuarioModel) {
    return usuarioRepository.save(usuarioModel);
  }

  public Optional<UsuarioModel> findById(Integer id) {
    Optional<UsuarioModel> usuarioModelOptional = usuarioRepository.findById(id);
    try{
      if(usuarioModelOptional.isPresent()) {
        return usuarioModelOptional;
      }

    } catch (Exception e) {
      throw new MinhaExcecao("Usuário não encontrado.");
    }
    return usuarioModelOptional;
  }

  public List<UsuarioModel> findAll() {
    return usuarioRepository.findAll();
  }

  public class MinhaExcecao extends RuntimeException {
    public MinhaExcecao(String mensagem) {
        super(mensagem);
    }
}

}
