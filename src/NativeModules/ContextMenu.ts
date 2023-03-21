import { NativeEventEmitter, NativeModules } from "react-native";

const { ContextMenuModule } = NativeModules;

type OptionType = { title: string; onPress: () => void };

const subscriptions = new Map();

const contextMenuEmitter = new NativeEventEmitter(ContextMenuModule);

contextMenuEmitter.addListener("RNFCM-onClose", () => {
  subscriptions.forEach((subscription) => subscription.remove());
  subscriptions.clear();
});

function addMenuOption(title: string, onPress: () => void) {
  let subscription = subscriptions.get(title);

  if (subscription != null) {
    subscription.remove();
  } else {
    ContextMenuModule.addMenuOption(title);
  }
  subscription = contextMenuEmitter.addListener(
    "RNFCM-didPressMenuOption",
    (event) => {
      if (event.title === title) {
        onPress();
      }
    },
  );

  subscriptions.set(title, subscription);
}

export const ContextMenu = {
  showMenu(buttons: Array<OptionType>, menuTitle: string | null = null) {
    buttons.forEach((button) => {
      addMenuOption(button.title, button.onPress);
    });

    if (menuTitle) {
      ContextMenuModule.setMenuTitle(menuTitle);
    }

    ContextMenuModule.show();
  },
};
