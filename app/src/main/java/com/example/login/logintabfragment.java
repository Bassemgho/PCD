package com.example.login;

import android.content.Intent;
import android.os.Bundle;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import androidx.fragment.app.Fragment;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProvider;

import com.example.login.ViewModels.MainActivityViewModel;
import com.example.login.activities.HomeActivity;
import com.google.android.material.floatingactionbutton.FloatingActionButton;

public class logintabfragment extends Fragment {
    TextView email,pass;
    Button login;
    TextView forgetpass;
    MainActivityViewModel viewModel;

    float v=0;
    @Override
    public View onCreateView (LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {

        ViewGroup root=(ViewGroup) inflater.inflate(R.layout.login_tab_fragment,container,false);
        email = root.findViewById(R.id.Email);
        pass =root.findViewById(R.id.Pass);
        forgetpass =root.findViewById(R.id.forgetpass);
        login =root.findViewById(R.id.button);
        viewModel = new ViewModelProvider(getActivity()).get(MainActivityViewModel.class);

        email.setTranslationX(800);
        pass.setTranslationX(800);
        forgetpass.setTranslationX(800);
        login.setTranslationX(800);

        email.setAlpha(v);
        pass.setAlpha(v);
        forgetpass.setAlpha(v);
        login.setAlpha(v);

        email.animate().translationX(0).alpha(1).setDuration(800).setStartDelay(300).start();
        pass.animate().translationX(0).alpha(1).setDuration(800).setStartDelay(500).start();
        forgetpass.animate().translationX(0).alpha(1).setDuration(800).setStartDelay(500).start();
        login.animate().translationX(0).alpha(1).setDuration(800).setStartDelay(700).start();

        viewModel.getRep();
        viewModel.getSuccess().observe(getViewLifecycleOwner(), new Observer<Boolean>() {
            @Override
            public void onChanged(Boolean aBoolean) {
                if (aBoolean){
                    Toast.makeText(getContext(),"you got rep"+viewModel.getRep().getValue(),Toast.LENGTH_LONG).show();
                    Intent intent = new Intent(getActivity(), HomeActivity.class);
                    intent.putExtra("token",viewModel.getRep().getValue());
                    startActivity(intent);
                    return;


                }

                    Toast.makeText(getContext(),"noooo",Toast.LENGTH_SHORT).show();


            }
        });
        login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String username = email.getText().toString();
                String password = pass.getText().toString();
                viewModel.setPassword(password);
                viewModel.setUsername(username);
                try {
                    viewModel.login();
                } catch (Exception e) {
                    e.printStackTrace();
                }


            }
        });




        return root;
    }
}
