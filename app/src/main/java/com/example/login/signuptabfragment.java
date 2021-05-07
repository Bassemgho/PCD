package com.example.login;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;


import androidx.fragment.app.Fragment;

import com.google.android.material.floatingactionbutton.FloatingActionButton;

public class signuptabfragment extends Fragment {
    TextView email,pass,corectpass,signup;
    float v=0;

    @Override
    public View onCreateView (LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {

        ViewGroup root =(ViewGroup) inflater.inflate(R.layout.signup,container,false);


        email = root.findViewById(R.id.Email);
        pass =root.findViewById(R.id.Pass);
        corectpass =root.findViewById(R.id.CorrectPass);
        signup =root.findViewById(R.id.button);

        email.setTranslationX(800);
        pass.setTranslationX(800);
        corectpass.setTranslationX(800);
        signup.setTranslationX(800);

        email.setAlpha(v);
        pass.setAlpha(v);
        corectpass.setAlpha(v);
        signup.setAlpha(v);

        email.animate().translationX(0).alpha(1).setDuration(800).setStartDelay(300).start();
        pass.animate().translationX(0).alpha(1).setDuration(800).setStartDelay(300).start();
        corectpass.animate().translationX(0).alpha(1).setDuration(800).setStartDelay(300).start();
        signup.animate().translationX(0).alpha(1).setDuration(800).setStartDelay(300).start();


        return root;
    }
}
