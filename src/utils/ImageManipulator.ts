import {
  openPicker,
  openCropper,
  Options,
} from "react-native-image-crop-picker";

const cropperOptions: Options = {
  width: 400,
  height: 400,
  cropping: true,
  mediaType: "photo",
  cropperCircleOverlay: true,
  cropperToolbarTitle: "Move and scale",
  cropperToolbarWidgetColor: "white",
  cropperToolbarColor: "black",
  cropperStatusBarColor: "black",
  showCropFrame: false,
  hideBottomControls: true,
  showCropGuidelines: false,
  enableRotationGesture: false,
};

async function ImagePicker() {
  return await openPicker(cropperOptions);
}

async function ImageCropper(path: string) {
  return await openCropper({ ...cropperOptions, path, mediaType: "photo" });
}

export { ImagePicker, ImageCropper };
