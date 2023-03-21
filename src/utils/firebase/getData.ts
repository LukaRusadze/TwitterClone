import firestore, { firebase } from "@react-native-firebase/firestore";
import {
  initializeFromFirebase,
  saveProfilePicture,
} from "../../store/features/account/accountSlice";
import { store } from "../../store/store";

export async function getUserByEmail(email: string) {
  return await firestore()
    .collection("users")
    .where("email", "==", email)
    .get();
}

export async function getUserById(id: string) {
  return await firestore().collection("users").doc(id).get();
}

export async function initializeUserData() {
  try {
    const user = await getUserById(firebase.auth().currentUser!.uid);
    const data = user.data();

    if (data) {
      store.dispatch(initializeFromFirebase(data));

      if (!data.profilePicture) {
        store.dispatch(
          saveProfilePicture(
            "https://firebasestorage.googleapis.com/v0/b/twitterclone-b08c5.appspot.com/o/profilePictures%2Fdefault_profile_400x400.png?alt=media&token=45c4b939-c609-4248-8d04-c23c438abd73",
          ),
        );
      }
    }
  } catch (error) {
    console.warn(error);
  }
}
