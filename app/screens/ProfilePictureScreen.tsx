import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useAppDispatch } from "../types/redux";
import useTwitterHeader from "../hooks/useTwitterHeader";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackGenericProp } from "../types/stackNavigation";
import RegisterNavigation from "../components/Organisms/RegisterNavigation";
import { ImagePicker } from "../utils/ImageManipulator";
import { saveProfilePicture } from "../store/features/account/accountSlice";
import { ActionMenu } from "../utils/ActionMenu";

interface Props {}

const ProfilePictureScreen = ({}: Props) => {
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NavigationStackGenericProp<"ProfilePicture">>();

  useTwitterHeader(navigation, false, 30);

  function handleCamera() {
    navigation.navigate("Camera");
  }

  function handleImagePicker() {
    ImagePicker()
      .then((image) => {
        dispatch(saveProfilePicture(image));
      })
      .catch((error) => {
        if (error.message === "User cancelled image selection") return;
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerText}>Pick a profile picture</Text>
        <Text style={styles.prompt}>
          Have a favorite selfie? upload it now.
        </Text>
        <Pressable
          onPressOut={() => {
            ActionMenu([
              { title: "Take photo", onPress: () => handleCamera() },
              {
                title: "Choose existing photo",
                onPress: () => handleImagePicker(),
              },
            ]);
          }}
        >
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
