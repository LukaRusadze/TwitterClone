package com.rusadzeluka.twitterclone;

import android.app.AlertDialog;
import android.content.Context;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.rusadzeluka.twitterclone.interfaces.DevOptionHandler;

import java.util.LinkedHashMap;

public class ContextMenuModule extends ReactContextBaseJavaModule {
    private AlertDialog mDevOptionsDialog;
    private ReactApplicationContext reactContext;
    LinkedHashMap<String, DevOptionHandler> options = new LinkedHashMap<>();


    ContextMenuModule(ReactApplicationContext context) {
        super(context);

        this.reactContext = context;
    }

    @ReactMethod
    public void show() {
        final DevOptionHandler[] optionHandlers = options.values().toArray(new DevOptionHandler[0]);

        final Context context = reactContext.getCurrentActivity();

        mDevOptionsDialog =
                new AlertDialog.Builder(context)
                        .setItems(
                                options.keySet().toArray(new String[0]),
                                (dialog, which) -> {
                                    optionHandlers[which].onOptionSelected();
                                    mDevOptionsDialog = null;
                                })
                        .setOnCancelListener(
                                dialog -> mDevOptionsDialog = null)
                        .create();
        mDevOptionsDialog.show();
    }

    @ReactMethod
    public void addMenuOption(final String title) {
        this.options.put(
                title,
                () -> {
                    WritableMap data = Arguments.createMap();
                    data.putString("title", title);

                    ReactApplicationContext reactApplicationContext =
                            getReactApplicationContextIfActiveOrWarn();

                    if (reactApplicationContext != null) {
                        reactApplicationContext
                                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                                .emit("didPressMenuOption", data);
                    }
                });
    }

    @ReactMethod
    public void addMenuOptions(final String[] titles) {
        for (String title : titles) {
            this.addMenuOption(title);
        }
    }

    @NonNull
    @Override
    public String getName() {
        return "ContextMenuModule";
    }
}
