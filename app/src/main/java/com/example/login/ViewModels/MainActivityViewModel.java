package com.example.login.ViewModels;

import android.app.Application;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;

import com.example.login.api.ApiClient;
import com.example.login.models.LoginCall;
import com.example.login.models.LoginResponse;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MainActivityViewModel extends ViewModel {
    String  username;
    String password;
    ApiClient client;
    MutableLiveData<Boolean> success ;
    MutableLiveData<String> rep ;

    //     MutableLiveData<String> token;
//    public MainActivityViewModel(@NonNull Application application) {
//        super(application);
//    }

    public MutableLiveData<String> getRep() {
        if (rep == null){
            this.rep = new MutableLiveData<>();
        }
        return rep;
    }

    public void setRep(MutableLiveData<String> rep) {
        this.rep = rep;
    }



    public void setSuccess(MutableLiveData<Boolean> success) {
        this.success = success;
    }

    public ApiClient getClient() {
        if (client==null){
            client = new ApiClient();
        }
        return client;
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

    public MutableLiveData<Boolean> getSuccess() {
        if (success==null){
            this.success = new MutableLiveData<>();
        }
        return success;
    }

    public void login(){
        LoginCall loginCall = new LoginCall();
        loginCall.setUsername(username);
        loginCall.setPassword(password);
        getClient().getApi().signIn(loginCall).enqueue(new Callback<LoginResponse>() {
            @Override
            public void onResponse(Call<LoginResponse> call, Response<LoginResponse> response) {
                if (response !=null && response.isSuccessful() && response.body()!=null){
                    getRep().setValue(response.body().getToken());
                    success.setValue(true);
                }


            }

            @Override
            public void onFailure(Call<LoginResponse> call, Throwable t) {
                success.setValue(false);
                getRep().setValue(t.getMessage());

            }
        });


    }
//    /public void fetshData(){
//        getClient().getApi().fetshdata("Bearer"+rep.getValue()).enqueue(new Callback<HomeResponse>() {
//            @Override
//            public void onResponse(Call<HomeResponse> call, Response<HomeResponse> response) {
//
//            }
//
//            @Override
//            public void onFailure(Call<HomeResponse> call, Throwable t) {
//
//            }
//        });
//    }
}

