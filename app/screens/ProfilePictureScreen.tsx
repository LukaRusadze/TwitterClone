import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../types/redux";
import useTwitterHeader from "../hooks/useTwitterHeader";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackGenericProp } from "../types/stackNavigation";
import { ImagePicker } from "../utils/ImageManipulator";
import { saveProfilePicture } from "../store/features/account/accountSlice";
import { ActionMenu } from "../utils/ActionMenu";
import ProfilePictureNavigation from "../components/Organisms/ProfilePictureNavigation";
import storage from "@react-native-firebase/storage";
import { firebase } from "@react-native-firebase/auth";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import firestore from "@react-native-firebase/firestore";

interface Props {}

const ProfilePictureScreen = ({}: Props) => {
  const dispatch = useAppDispatch();
  const profilePicture = useAppSelector(
    (state) => state.account.profilePicture,
  );

  const navigation =
    useNavigation<NavigationStackGenericProp<"ProfilePicture">>();

  useTwitterHeader(navigation, false, 30);

  function handleCamera() {
    navigation.navigate("Camera");
  }

  function handleImagePicker() {
    ImagePicker()
      .then((image) => {
        dispatch(saveProfilePicture(image.path));
      })
      .catch((error) => {
        if (error.message === "User cancelled image selection") return;
      });
  }

  useEffect(() => {
    changeNavigationBarColor("white", true, false);
  }, []);

  useEffect(() => {
    if (profilePicture) {
      const reference = storage().ref(
        "profilePictures/" + firebase.auth().currentUser?.uid,
      );
      reference.putFile(profilePicture).then(async (data) => {
        await firestore()
          .collection("users")
          .doc(firebase.auth().currentUser?.uid)
          .update({
            profilePicture: await reference.getDownloadURL(),
          });
      });
    }
  }, [dispatch, profilePicture]);

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
          {profilePicture ? (
            <Image
              style={styles.uploadButtonImage}
              source={{ uri: "file://" + profilePicture }}
            />
          ) : (
            <Image
              style={styles.uploadButton}
              source={require("../assets/images/upload_button.png")}
            />
          )}
        </Pressable>
      </View>

      <ProfilePictureNavigation isNextActive={!!profilePicture} />
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
  uploadButtonImage: {
    width: 168,
    height: 168,
    borderRadius: 100,
    marginTop: 47,
    alignSelf: "center",
  },
  cameraView: {
    flex: 1,
  },
});
