package com.sicon_epos;

import com.facebook.react.ReactActivity;
import android.view.KeyEvent;
import android.widget.EditText;

import com.github.kevinejohn.keyevent.KeyEventModule;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "sicon_epos";
  }
    @Override  // <--- Add this method if you want to react to keyDown
    public boolean onKeyDown(int keyCode, KeyEvent event) {

      return handleKey(keyCode, event);
    }

    @Override
    public boolean dispatchKeyEvent(KeyEvent event) {
        if (interceptKeyEvent(event) && (event.getKeyCode() == KeyEvent.KEYCODE_BACK || event.getKeyCode() == KeyEvent.KEYCODE_ENTER)) {
            if (event.getKeyCode() == KeyEvent.KEYCODE_ENTER) {
                KeyEventModule.getInstance().onKeyDownEvent(event.getKeyCode(), event);
            }
            return true;
        }
        return super.dispatchKeyEvent(event);
    }

    private boolean interceptKeyEvent(KeyEvent event) {
        boolean  isTextbox = this.getCurrentFocus() instanceof EditText;
        boolean  isSoftKey = (event.getFlags() & KeyEvent.FLAG_SOFT_KEYBOARD) != 0;

        return !isTextbox && !isSoftKey;
    }

    private boolean handleKey(int keyCode, KeyEvent event) {

        if (interceptKeyEvent(event) && (keyCode != KeyEvent.KEYCODE_DEL)) {
            KeyEventModule.getInstance().onKeyDownEvent(keyCode, event);
            return true;
        }

        return false;
    }

    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        return handleKey(keyCode, event);
    }

    @Override
    public boolean onKeyMultiple(int keyCode, int repeatCount, KeyEvent event) {
        return super.onKeyMultiple(keyCode, repeatCount, event);
    }
}
