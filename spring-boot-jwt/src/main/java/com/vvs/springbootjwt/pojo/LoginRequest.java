package com.vvs.springbootjwt.pojo;

import lombok.Data;

@Data
public class LoginRequest {
    
    private String username;
    private String password;
}
