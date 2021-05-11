package com.example.login.models;

import com.google.gson.annotations.SerializedName;

import java.util.List;

public class User {
    @SerializedName("username")
    private String username;
    @SerializedName("password")
    private String password;
    @SerializedName("email")
    private String email;
    @SerializedName("phonenumber")
    private String phonenumber;
    @SerializedName("cartes")
    private List<Cartes> cartes;

    public User(String username, String password, String email, String phonenumber) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.phonenumber = phonenumber;
    }

    public User() {

    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }

    public List<Cartes> getCartes() {
        return cartes;
    }

    public void setCartes(List<Cartes> cartes) {
        this.cartes = cartes;
    }
}
