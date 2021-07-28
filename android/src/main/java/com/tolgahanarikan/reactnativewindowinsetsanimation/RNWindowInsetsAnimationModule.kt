package com.tolgahanarikan.reactnativewindowinsetsanimation

import android.content.res.Resources.getSystem
import android.view.WindowInsets
import android.view.WindowInsetsAnimation
import androidx.core.view.WindowInsetsCompat
import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule.RCTDeviceEventEmitter

class RNWindowInsetsAnimationModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName() = "RNWindowInsetsAnimationModule"

    @ReactMethod
    fun listenForWindowInsetEvents() {
        val activity = currentActivity ?: return
        val window = activity.window

        val rootView = window.decorView.rootView

        val cb = object : WindowInsetsAnimation.Callback(DISPATCH_MODE_STOP) {
            override fun onProgress(insets: WindowInsets, animations: MutableList<WindowInsetsAnimation>): WindowInsets {
                val posBottom = (insets.getInsets(WindowInsetsCompat.Type.ime()).bottom -
                        insets.getInsets(WindowInsetsCompat.Type.systemBars()).bottom)
                    .dp.coerceIn(0 , 1000)

                val params = Arguments.createMap()
                params.putInt("bottomInset", posBottom)

                sendEvent(reactApplicationContext, "RNWindowInsetEvent", params)

                return insets
            }
        }

        rootView.setWindowInsetsAnimationCallback(cb)
    }

    private fun sendEvent(reactContext: ReactContext,
                          eventName: String,
                          params: WritableMap) {
        reactContext
                .getJSModule(RCTDeviceEventEmitter::class.java)
                .emit(eventName, params)
    }

    val Int.dp: Int get() = (this / getSystem().displayMetrics.density).toInt()
}