package ru.kata.spring.boot_security.demo.service;


import org.springframework.security.core.userdetails.UserDetailsService;
import ru.kata.spring.boot_security.demo.model.Role;
import ru.kata.spring.boot_security.demo.model.User;

import java.util.List;
import java.util.Set;

public interface UserServices extends UserDetailsService {
    void add(User user);

    List<User> getListUser();

    User getById(Long id);

    void update(Long id, User user);

    void delete(Long id);

    User findByUsername(String username);

    public List<Role> getAllRoles();
    public Set<Role> getListRoleAsSet(List<String> list);
}
