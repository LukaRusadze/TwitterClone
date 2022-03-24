package com.rusadzeluka.twitterclone;

import android.app.AlertDialog;
import android.content.Context;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import org.jetbrains.annotations.NotNull;

import java.util.LinkedHashMap;

interface OptionHandler {
    void onOptionSelected();
}

public class ContextMenuModule extends ReactContextBaseJavaModule {
    private AlertDialog optionsDialog;
    private ReactApplicationContext reactContext;
    private @Nullable String menuTitle;
    LinkedHashMap<String, OptionHandler> options = new LinkedHashMap<>();

    ContextMenuModule(ReactApplicationContext context) {
        super(context);

        this.reactContext = context;
    }

    @ReactMethod
    public void show() {
        final OptionHandler[] optionHandlers = options.values().toArray(new OptionHandler[0]);

        final Context context = reactContext.getCurrentActivity();

        optionsDialog = new AlertDialog
                .Builder(context)
                .setTitle(this.menuTitle)
                .setItems(
                        options.keySet().toArray(new String[0]),
                        (dialog, which) -> {
                            optionHandlers[which].onOptionSelected();
                            optionsDialog = null;
                            this.reset();
                            this.eventEmitter("RNFCM-onClose", null);

                        })
                .setOnCancelListener(
                        dialog -> {
                            optionsDialog = null;
                            this.reset();
                            this.eventEmitter("RNFCM-onClose", null);
                        })
                .create();
        optionsDialog.show();
    }

    private OptionHandler eventBinding(final String title) {
        return () -> {
            WritableMap data = Arguments.createMap();
            data.putString("title", title);

            this.eventEmitter("RNFCM-didPressMenuOption", data);
        };
    }

    private void eventEmitter(@NonNull final String eventName, @Nullable final Object data) {
        ReactApplicationContext reactApplicationContext =
                getReactApplicationContextIfActiveOrWarn();

        if (reactApplicationContext != null) {
            reactApplicationContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit(eventName, data);
        }
    }

    private void reset() {
        this.options.clear();
        this.menuTitle = null;
    }

    @ReactMethod
    public void addMenuOption(final String buttonTitle) {
        this.options.put(buttonTitle, eventBinding(buttonTitle));
    }

    @ReactMethod
    public void setMenuTitle(final @NotNull String menuTitle) {
        this.menuTitle = menuTitle;
    }

    @ReactMethod
    public void addListener(String eventName) {

    }

    @ReactMethod
    public void removeListeners(Integer count) {

    }

    @NonNull
    @Override
    public String getName() {
        return "ContextMenuModule";
    }
}
