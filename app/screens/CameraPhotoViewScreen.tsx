import { Image, Platform, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import CustomButton from "../components/Atoms/CustomButton";
import { colors } from "../config/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  NavigationStackGenericProp,
  RouteGenericProp,
} from "../types/stackNavigation";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import { ImageCropper } from "../utils/ImageManipulator";
import { useAppDispatch } from "../types/redux";
import { saveProfilePicture } from "../store/features/account/accountSlice";

interface Props {}

const CameraPhotoViewScreen = ({}: Props) => {
  const navigation =
    useNavigation<NavigationStackGenericProp<"CameraPhotoView">>();

  const route = useRoute<RouteGenericProp<"CameraPhotoView">>();
  const photo = route.params;

  const dispatch = useAppDispatch();

  useEffect(() => {
    Platform.OS === "android" && changeNavigationBarColor("black", false, true);

    return () => {
      Platform.OS === "android" &&
        changeNavigationBarColor("black", true, true);
    };
  }, []);

  function onClose() {
    navigation.goBack();
  }

  function onContinue() {
    ImageCropper("file://" + photo.path).then((image) => {
      dispatch(saveProfilePicture(image));
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.closeButtonContainre}>
          <CustomButton style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close-outline" size={32} color="white" />
          </CustomButton>
        </View>
        <Image
          source={{
            uri: "file://" + photo.path,
          }}
          style={styles.imageView}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          style={styles.retakeButton}
          textStyle={styles.retakeButtonText}
          onPress={onClose}
        >
          Retake
        </CustomButton>
        <CustomButton
          style={styles.usePhotoButton}
          textStyle={styles.usePhotoButtonText}
          onPress={onContinue}
        >
          Use photo
        </CustomButton>
      </View>
    </View>
  );
};

export default CameraPhotoViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  imageView: {
    flex: 1,
    borderRadius: 26,
  },
  content: {
    flex: 1,
    marginBottom: 19,
    marginTop: 19,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingBottom: 20,
    paddingTop: 21,
  },
  retakeButton: {
    borderWidth: 0,
  },
  retakeButtonText: {
    color: colors.primary,
    fontSize: 15,
  },
  usePhotoButton: {
    backgroundColor: colors.primary,
    borderWidth: 0,
  },
  usePhotoButtonText: {
    color: "white",
    fontSize: 15,
  },
  closeButtonContainre: {
    position: "absolute",
    zIndex: 1,
    marginTop: 16,
    marginLeft: 16,
  },
  closeButton: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderWidth: 0,
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 1,
    paddingTop: 1,
    borderRadius: 100,
  },
});
