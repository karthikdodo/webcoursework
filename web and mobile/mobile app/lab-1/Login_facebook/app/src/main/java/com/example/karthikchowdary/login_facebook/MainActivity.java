package com.example.karthikchowdary.login_facebook;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.facebook.CallbackManager;
import com.facebook.FacebookCallback;
import com.facebook.FacebookException;
import com.facebook.FacebookSdk;
import com.facebook.login.LoginManager;
import com.facebook.login.LoginResult;
import com.facebook.login.widget.LoginButton;

public class MainActivity extends AppCompatActivity {
    LoginButton login_button;
    CallbackManager callbackManager;
    private EditText textview;
    private EditText password;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        FacebookSdk.sdkInitialize(getApplicationContext());
        setContentView(R.layout.activity_main);
        initializeControls();
        loginWithFb();

    }

    public void myfunction(View v ) {
        textview = (EditText) findViewById(R.id.text);
        password = (EditText) findViewById(R.id.password);
        String login = textview.getText().toString();
        String pass = password.getText().toString();

        if ((login.equals("kar")) && (pass.equals("kar"))) {
            Intent intent = new Intent(MainActivity.this, Success_activity.class);
            startActivity(intent);

        } else {
            Toast.makeText(getApplicationContext(), "Incorrect details!! Login failed",
                    Toast.LENGTH_LONG).show();

        }
    }

    private void initializeControls()
    {
        callbackManager = CallbackManager.Factory.create();
        login_button= (LoginButton)findViewById(R.id.login_button);

    }

    private void loginWithFb(){
        LoginManager.getInstance().registerCallback(callbackManager,
                new FacebookCallback<LoginResult>() {
                    @Override
                    public void onSuccess(LoginResult loginResult) {
                        Intent intent = new Intent(MainActivity.this, Success_activity.class);
                        startActivity(intent);
                    }

                    @Override
                    public void onCancel() {
                        Toast.makeText(getApplicationContext(), "",
                                Toast.LENGTH_LONG).show();
                    }

                    @Override
                    public void onError(FacebookException exception) {

                    }
                });

    }
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        callbackManager.onActivityResult(requestCode, resultCode, data);
        super.onActivityResult(requestCode, resultCode, data);
    }
}
