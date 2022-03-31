import firestore from "@react-native-firebase/firestore";

export async function getUserByEmail(email: string) {
  return await firestore()
    .collection("users")
    .where("email", "==", email)
    .get();
}
