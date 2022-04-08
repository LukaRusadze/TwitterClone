import { Platform, Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import svgIcons from "../../config/svgIcons";
import { SvgProps } from "react-native-svg";

interface Props {
  icon?: keyof typeof svgIcons;
  text: string;
  onPress: () => void;
}

const DrawerListItem = ({ icon, text, onPress }: Props) => {
  let Icon: any;
  if (icon) {
    Icon = svgIcons[icon] as React.FC<SvgProps>;
  }
  return (
    <Pressable
      style={(isPressed) =>
        isPressed.pressed && Platform.OS === "ios"
          ? [styles.drawerItemContainer, styles.onPress]
          : styles.drawerItemContainer
      }
      android_ripple={{ color: "#dedede" }}
      onPress={onPress}
    >
      {icon && (
        <Icon
          style={styles.drawerItemIcon}
          fill={"black"}
          width={24}
          height={24}
        />
      )}
      <Text style={styles.drawerItemText}>{text}</Text>
    </Pressable>
  );
};

export default DrawerListItem;

const styles = StyleSheet.create({
  drawerItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 22,
    paddingTop: 15.7,
    paddingBottom: 15.7,
    opacity: 1,
  },
  onPress: {
    opacity: 0.5,
  },
  drawerItemIcon: {
    marginRight: 15,
  },
  drawerItemText: {
    fontFamily: "Chirp-Regular",
    fontSize: 18,
    color: "black",
  },
});
