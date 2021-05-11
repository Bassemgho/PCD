package com.example.login.api;

import com.example.login.models.HomeResponse;
import com.example.login.models.LoginCall;
import com.example.login.models.LoginResponse;
import com.example.login.models.User;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.Header;
import retrofit2.http.POST;

public interface Api {
    //    @FormUrlEncoded
    @POST("/app/signin")
    Call<LoginResponse> signIn(@Body LoginCall loginCall);
    //    @FormUrlEncoded
    @POST("/app/signup/")
    Call<LoginResponse> signUp(@Body User user);

    @GET("/app/cards")
    Call<HomeResponse> fetshdata(@Header("Authorization") String token);


}
