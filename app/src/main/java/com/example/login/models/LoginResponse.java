package com.example.login.models;

import com.google.gson.annotations.SerializedName;

public class LoginResponse {
    @SerializedName("sucess")
    String sucess;
    @SerializedName("token")
    String token;

    public String getSucess() {
        return sucess;
    }

    public void setSucess(String sucess) {
        this.sucess = sucess;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}