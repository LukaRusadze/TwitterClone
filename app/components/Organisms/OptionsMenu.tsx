import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import FAB from "../Atoms/FAB";

interface Props {}

const OptionsMenu = ({}: Props) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <>
      {isMenuVisible && <View style={styles.menuContainer} />}
      <FAB onPress={() => setIsMenuVisible((state) => !state)} />
    </>
  );
};

export default OptionsMenu;

const styles = StyleSheet.create({
  menuContainer: {
    position: "absolute",
    zIndex: 1,
    top: 0,
    left: 0,
    backgroundColor: "white",
    opacity: 0.95,
    width: "100%",
    height: "100%",
  },
});
