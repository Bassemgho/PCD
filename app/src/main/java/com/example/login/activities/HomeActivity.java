package com.example.login.activities;

import androidx.annotation.NonNull;
import androidx.appcompat.app.ActionBarDrawerToggle;
import androidx.appcompat.app.AppCompatActivity;
import androidx.databinding.DataBindingUtil;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import android.os.Bundle;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.widget.Toast;

import androidx.appcompat.widget.Toolbar;

import com.example.login.R;
import com.example.login.databinding.ActivityHomeBinding;
import com.example.login.fragments.HomeFragment;
import com.example.login.fragments.InfoFragment;
import com.example.login.fragments.ScanFragment;
import com.google.android.material.navigation.NavigationView;


public class HomeActivity extends AppCompatActivity {
    ActivityHomeBinding binding;
    FragmentManager fragmentManager;
    FragmentTransaction fragmentTransaction;
    HomeFragment homeFragment;
    InfoFragment infoFragment;
    ScanFragment scanFragment;
    DrawerLayout drawerLayout;
    Toolbar toolbar;

    ActionBarDrawerToggle actionBarDrawerToggle;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = DataBindingUtil.setContentView(HomeActivity.this,R.layout.activity_home);
//        toolbar = (Toolbar) findViewById(R.id.toolbar);
//        setSupportActionBar(toolbar);
        actionBarDrawerToggle = new ActionBarDrawerToggle(this,binding.drawerlayout,R.string.nav_open,R.string.nav_close);
        binding.drawerlayout.addDrawerListener(actionBarDrawerToggle);
        actionBarDrawerToggle.syncState();
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        fragmentManager = getSupportFragmentManager();
        binding.viewnavigation.setNavigationItemSelectedListener(new NavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                switch (item.getItemId()){
                    case R.id.home:
                        fragmentTransaction.replace(R.id.container_fragment,new HomeFragment()).commit();
                        binding.drawerlayout.closeDrawers();
                        return true;
                    case R.id.info:
                        fragmentTransaction.replace(R.id.container_fragment,new InfoFragment()).commit();
                        binding.drawerlayout.closeDrawers();
                        return true;

                    case R.id.logout:
                        logout();
                        binding.drawerlayout.closeDrawers();
                        return true;
                    default:
                        fragmentTransaction.replace(R.id.container_fragment,new HomeFragment()).commit();
                        binding.drawerlayout.closeDrawers();
                        return true;

                }

            }
        });


    }






//    @Override
//    public boolean onCreateOptionsMenu(Menu menu) {
//        MenuInflater inflater = getMenuInflater();
//        inflater.inflate(R.menu.drawer,menu);
//        return super.onCreateOptionsMenu(menu);
//    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        fragmentTransaction = fragmentManager.beginTransaction();
        if (actionBarDrawerToggle.onOptionsItemSelected(item)){
            return true;
        }
        switch (item.getItemId()){
            case R.id.home:
                fragmentTransaction.replace(R.id.container_fragment,new HomeFragment()).commit();
                binding.drawerlayout.closeDrawers();
                break;
            case R.id.info:
                fragmentTransaction.replace(R.id.container_fragment,new InfoFragment()).commit();
                binding.drawerlayout.closeDrawers();
                break;

            case R.id.logout:
                logout();
                binding.drawerlayout.closeDrawers();
            default:
                fragmentTransaction.replace(R.id.container_fragment,new HomeFragment()).commit();
                binding.drawerlayout.closeDrawers();
                break;

        }
        return super.onOptionsItemSelected(item);
    }

    private void logout() {
        Toast.makeText(getApplicationContext(),"you are going to logout",Toast.LENGTH_SHORT).show();
    }
}