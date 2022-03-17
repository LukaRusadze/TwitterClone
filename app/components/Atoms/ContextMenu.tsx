import {
  ActionSheetIOS,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";

interface Props {
  items: { title: string; onPress: () => void }[];
  visible: boolean;
  setVisibility: (state: boolean) => void;
}

const ContextMenu = ({ items, visible, setVisibility }: Props) => {
  useEffect(() => {
    if (Platform.OS === "ios") {
      const options = items.map((item) => item.title);
      options.push("Cancel");

      if (visible) {
        ActionSheetIOS.showActionSheetWithOptions(
          {
            options: options,
            cancelButtonIndex: options.length - 1,
          },
          (buttonIndex) => {
            if (buttonIndex !== options.length - 1) {
              items[buttonIndex].onPress();
            }
            setVisibility(false);
          },
        );
      }
    }
  }, [items, visible, setVisibility]);

  if (Platform.OS === "android") {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        statusBarTranslucent={true}
        onRequestClose={() => setVisibility(false)}
      >
        <View style={styles.content}>
          <View style={styles.background}>
            <Pressable
              style={styles.backgroundPressable}
              onPressOut={() => setVisibility(false)}
            />
          </View>
          <View style={styles.menu}>
            {items.map((item) => (
              <Pressable
                key={items.indexOf(item)}
                style={styles.button}
                onPress={item.onPress}
                android_ripple={{ color: "default" }}
              >
                <View>
                  <Text style={styles.text}>{item.title}</Text>
                </View>
              </Pressable>
            ))}
          </View>
        </View>
      </Modal>
    );
  }
  return <></>;
};

export default ContextMenu;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0 , 0, 0.35)",
    flex: 1,
  },
  backgroundPressable: {
    flex: 1,
  },
  menu: {
    backgroundColor: "white",
    elevation: 10,
    alignSelf: "center",
    marginTop: 24,
    paddingTop: 7.5,
    paddingBottom: 7.5,
    width: "83%",
    borderRadius: 3,
  },
  text: {
    color: "black",
    fontFamily: "TwitterChirp",
    paddingTop: 15.2,
    paddingBottom: 15.2,
    paddingLeft: 25,
    paddingRight: 25,
    fontSize: 14.6,
  },
  button: {},
});
