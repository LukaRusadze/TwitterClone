import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import LightBulbOff from "../../assets/icons/DrawerNavigation/ic_vector_lightbulb_stroke_on.svg";
import QRCode from "../../assets/icons/DrawerNavigation/ic_vector_qr_code.svg";

interface Props {}

const DrawerExtraButtons = ({}: Props) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <LightBulbOff width={25} height={25} />
      </Pressable>
      <Pressable style={styles.button}>
        <QRCode width={25} height={25} />
      </Pressable>
    </View>
  );
};

export default DrawerExtraButtons;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 0.3,
    borderColor: "#9e9e9e",
    paddingLeft: 20,
    paddingRight: 20,
  },
  button: {
    paddingTop: 11.5,
    paddingBottom: 11.5,
  },
});
