package com.example.karthikchowdary.login_facebook;

import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class Success_activity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_success_activity);
    }
    public void onPhotoClick(View v) {
        //This code redirects the from main page to the maps page.
        Intent redirect = new Intent(Success_activity.this, CameraActivity.class);
        startActivity(redirect);

    }
    public void getNews(View v){
        Uri uri = Uri.parse("https://news.google.com/?hl=en-US&gl=US&ceid=US:en"); // missing 'http://' will cause crashed
        Intent intent = new Intent(Intent.ACTION_VIEW, uri);
        startActivity(intent);
    }
    public void Pressure(View v){
        Intent redirect = new Intent(Success_activity.this, Third_activity.class);
        startActivity(redirect);
    }
}
