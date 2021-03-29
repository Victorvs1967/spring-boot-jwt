package com.vvs.springbootjwt.repository;

import java.util.Optional;

import com.vvs.springbootjwt.models.ERole;
import com.vvs.springbootjwt.models.Role;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
