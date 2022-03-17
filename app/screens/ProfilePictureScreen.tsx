import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { useAppSelector } from "../hooks/redux";
import useTwitterHeader from "../hooks/useTwitterHeader";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackGenericProp } from "../types/stackNavigation";
import RegisterNavigation from "../components/Organisms/RegisterNavigation";
import ContextMenu from "../components/Atoms/ContextMenu";

interface Props {}

const ProfilePictureScreen = ({}: Props) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const accountData = useAppSelector((state) => state.account);
  const navigation =
    useNavigation<NavigationStackGenericProp<"ProfilePicture">>();
  console.log(accountData);

  useTwitterHeader(navigation, false, 30);

  function handleCamera() {
    setIsMenuVisible(false);
    navigation.navigate("Camera");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerText}>Pick a profile picture</Text>
        <Text style={styles.prompt}>
          Have a favorite selfie? upload it now.
        </Text>
        <ContextMenu
          items={[
            { title: "Take photo", onPress: () => handleCamera() },
            { title: "Choose existing photo", onPress: () => null },
          ]}
          setVisibility={setIsMenuVisible}
          visible={isMenuVisible}
        />
        <Pressable onPressOut={() => setIsMenuVisible(true)}>
          <Image
            style={styles.uploadButton}
            source={require("../assets/images/upload_button.png")}
          />
        </Pressable>
      </View>

      <RegisterNavigation isNextActive={false} isEmailInput={false} />
    </SafeAreaView>
  );
};

export default ProfilePictureScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  content: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  headerText: {
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    marginTop: 12,
    color: "black",
  },
  prompt: {
    fontFamily: "Roboto-Regular",
    marginTop: 10,
    color: "#606060",
  },
  uploadButton: {
    height: 168,
    width: 168,
    marginTop: 47,
    alignSelf: "center",
  },
  cameraView: {
    flex: 1,
  },
});
