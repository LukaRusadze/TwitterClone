import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { store } from "../../store/store";
import { Alert } from "react-native";

async function UsernameGenereator(name: string) {
  try {
    const querySnapshot = await firestore()
      .collection("users")
      .where("username", "==", name)
      .get();
    if (querySnapshot.docs[0]?.exists) {
      return (
        name.split(" ").join() +
        Math.floor(100000000 + Math.random() * 900000000)
      );
    } else {
      return name;
    }
  } catch (error) {
    console.log(error);
  }
}

async function RegisterUser() {
  const accountData = store.getState().account;

  try {
    const credentials = await auth().createUserWithEmailAndPassword(
      accountData.email,
      accountData.password,
    );

    await firestore()
      .collection("users")
      .doc(credentials.user.uid)
      .set({
        name: accountData.name,
        email: accountData.email,
        password: accountData.password,
        dateOfBirth: accountData.dateOfBirth,
        username: await UsernameGenereator(accountData.name),
        emailVerified: true,
      });
  } catch (error: any) {
    Alert.alert("Error", error.message.split(" ").splice(1).join(" "));
  }
}

export { RegisterUser };
