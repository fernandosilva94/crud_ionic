package com.ionic.crudionic.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ionic.crudionic.models.UsuarioModel;

public interface UsuarioRepository extends JpaRepository<UsuarioModel, Integer> {}
