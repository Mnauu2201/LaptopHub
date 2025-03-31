package com.laptophub.store;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().permitAll() // Cho phép truy cập tất cả các endpoint mà không cần xác thực
                )
                .csrf().disable() // Tắt CSRF nếu không cần
                .formLogin().disable(); // Tắt trang đăng nhập mặc định
        return http.build();
    }
}
