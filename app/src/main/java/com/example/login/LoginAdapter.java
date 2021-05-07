package com.example.login;

import android.content.Context;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentPagerAdapter;

public class LoginAdapter extends FragmentPagerAdapter {
    private Context context;
    int totalTabs;
    public LoginAdapter(FragmentManager fm ,Context context,int totalTabs){
        super(fm);
        this.context=context;
        this.totalTabs=totalTabs;
    }

    @Override
    public int getCount() {
        return totalTabs;
    }

    public Fragment getItem (int position){
        switch(position){
            case 0:
                logintabfragment Logintabfragment =new logintabfragment();
                return Logintabfragment;
            case 1:
                signuptabfragment Signuptabfragment=new signuptabfragment();
                return Signuptabfragment;


        }
        return null;
    }
}
