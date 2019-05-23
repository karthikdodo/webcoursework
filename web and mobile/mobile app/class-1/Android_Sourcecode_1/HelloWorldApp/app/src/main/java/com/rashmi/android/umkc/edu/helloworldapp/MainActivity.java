package com.rashmi.android.umkc.edu.helloworldapp;


import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.content.Intent;
import android.widget.Toast;



public class MainActivity extends AppCompatActivity {

    private EditText textview;
    private EditText password;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void myfunction(View v ){
    textview=(EditText) findViewById(R.id.text);
    password=(EditText) findViewById(R.id.password);
      String login = textview.getText().toString();
      String pass = password.getText().toString();

    if((login.equals("kar")) && (pass.equals("kar"))){
        Intent intent = new Intent(MainActivity.this, Success_activity.class);
        startActivity(intent);

    }
    else{
        Toast.makeText(getApplicationContext(), "Incorrect details!! Login failed",
                Toast.LENGTH_LONG).show();

    }


    }


}
