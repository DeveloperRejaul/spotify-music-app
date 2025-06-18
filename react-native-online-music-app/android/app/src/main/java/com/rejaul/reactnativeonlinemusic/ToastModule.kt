package com.rejaul.reactnativeonlinemusic
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import android.widget.Toast
import com.facebook.react.bridge.Promise


class ToastModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName() = "Toast"

    @ReactMethod
    fun show(text: String) {
        Toast.makeText(reactApplicationContext,text,Toast.LENGTH_SHORT).show();
    }

    @ReactMethod
    fun createCalendarEvent2(name: String, location: String, promise: Promise) {
        try {
            val eventId = "$name $location"
            promise.resolve(eventId)
        } catch (e: Throwable) {
            promise.reject("Create Event Error", e)
        }
    }
}