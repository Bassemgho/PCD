package com.example.login.models;


import com.google.gson.annotations.SerializedName;

import java.util.ArrayList;

public class HomeResponse {

    @SerializedName("user")
    public ArrayList<Users> user;

    public ArrayList<Users> getUser() {
        return user;
    }

    public void setUser(ArrayList<Users> user) {
        this.user = user;
    }


}
