import { Platform, StyleSheet, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import {
  Camera,
  CameraPermissionRequestResult,
  useCameraDevices,
} from "react-native-vision-camera";
import CustomButton from "../components/Atoms/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { NavigationStackGenericProp } from "../types/stackNavigation";
import changeNavigationBarColor from "react-native-navigation-bar-color";

interface Props {
  isCameraActive: boolean;
  setIsCameraActive: (state: boolean) => void;
}

const CameraScreen = ({}: Props) => {
  const navigation = useNavigation<NavigationStackGenericProp<"Camera">>();

  const [isSelfieCamera, setIsSelfieCamera] = useState(true);

  const [cameraPermission, setCameraPermission] =
    useState<CameraPermissionRequestResult>("denied");

  const isFocused = useIsFocused();
  const camera = useRef<Camera>(null);

  const devices = useCameraDevices();

  async function handleCapture() {
    camera
      .current!.takePhoto({
        qualityPrioritization: "quality",
        flash: "off",
      })
      .then((photo) => {
        navigation.navigate("CameraPhotoView", photo);
      });
  }

  useEffect(() => {
    (async function () {
      setCameraPermission(await Camera.requestCameraPermission());
    })();
    Platform.OS === "android" && changeNavigationBarColor("black", false, true);

    return () => {
      Platform.OS === "android" &&
        changeNavigationBarColor("white", true, true);
    };
  }, []);

  if (
    devices.front === undefined ||
    devices.back === undefined ||
    cameraPermission === "denied"
  ) {
    return <></>;
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.cameraView}>
            <Camera
              ref={camera}
              style={styles.cameraView}
              device={isSelfieCamera ? devices.front : devices.back}
              isActive={isFocused}
              photo={true}
            />
            <View style={styles.buttonsContainer}>
              <CustomButton
                style={styles.buttons}
                onPress={() => navigation.goBack()}
              >
                <Ionicons
                  name="ios-arrow-back-outline"
                  size={24}
                  color="white"
                />
              </CustomButton>
              <CustomButton
                style={styles.buttons}
                onPress={() => setIsSelfieCamera((state) => !state)}
              >
                <Ionicons
                  name="ios-camera-reverse-outline"
                  size={24}
                  color="white"
                />
              </CustomButton>
            </View>
            <View style={styles.shutterButtonContainer}>
              <CustomButton
                style={styles.shutterButton}
                onPress={() => handleCapture()}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  cameraView: {
    flex: 1,
    borderRadius: 26,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    marginBottom: 19,
    marginTop: 19,
  },
  buttonsContainer: {
    position: "absolute",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 16,
    paddingRight: 15,
    paddingLeft: 15,
  },
  buttons: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderWidth: 0,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 5,
    paddingBottom: 5,
  },
  shutterButtonContainer: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    bottom: 0,
    marginBottom: 20,
  },
  shutterButton: {
    width: 78,
    height: 78,
    borderRadius: 100,
    borderWidth: 4.5,
    borderColor: "white",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  imageView: {
    flex: 1,
  },
});
