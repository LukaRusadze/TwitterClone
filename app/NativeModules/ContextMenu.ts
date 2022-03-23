import { DeviceEventEmitter, NativeModules } from "react-native";

const { ContextMenuModule } = NativeModules;

type OptionsType = { title: string; handler: () => void };

const subscriptions = new Map();

const ContextMenu = {
  addMenuOption: (title: string, handler: () => void) => {
    let subscription = subscriptions.get(title);

    if (subscription != null) {
      subscription.remove();
    } else {
      ContextMenuModule.addMenuOption(title);
    }

    DeviceEventEmitter.addListener("didPressMenuOption", (event) => {
      if (event.title === title) {
        handler();
      }
    });
  },
  addMenuOptions: (options: Array<OptionsType>) => {
    options.forEach((option) => {
      ContextMenu.addMenuOption(option.title, option.handler);
    });
  },
  show: () => {
    ContextMenuModule.show();
  },
};

export { ContextMenu };
