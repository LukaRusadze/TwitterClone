import { ActionSheetIOS, Platform } from "react-native";
import { ContextMenu } from "../NativeModules/ContextMenu";

interface buttonType {
  title: string;
  onPress: () => any;
}

/**
 * Display an iOS action sheet on IOS and Floating Context Menu on Android.
 * - `buttons` (array of objects containing `title` key and `onPress` key) - a list of buttons
 * - `menuTitle` (string) - text that will be displayed at the top of Floating Context Menu (Android Only)
 */
export function ActionMenu(
  buttons: Array<buttonType>,
  title: string | null = null,
) {
  if (Platform.OS === "ios") {
    const options = buttons.map((button) => button.title);
    options.push("Cancel");

    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: options,
        cancelButtonIndex: options.length - 1,
      },
      (buttonIndex) => {
        if (buttonIndex !== options.length - 1) {
          buttons[buttonIndex].onPress();
        }
      },
    );
  } else if (Platform.OS === "android") {
    ContextMenu.showMenu(buttons, title);
  }
}
