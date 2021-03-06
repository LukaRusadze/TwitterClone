import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccountState {
  name: string;
  phoneNumber: string;
  email: string;
  dateOfBirth?: number;
  password: string;
  profilePicture?: string;
  username: string;
}

const initialState: AccountState = {
  name: "",
  phoneNumber: "",
  email: "",
  dateOfBirth: undefined,
  password: "",
  profilePicture: undefined,
  username: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    saveUser: (
      state,
      action: PayloadAction<
        Pick<AccountState, "name" | "email" | "dateOfBirth" | "phoneNumber">
      >,
    ) => {
      return { ...state, ...action.payload };
    },
    savePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    saveProfilePicture: (state, action: PayloadAction<string>) => {
      state.profilePicture = action.payload;
    },
    initializeFromFirebase: (
      state,
      action: PayloadAction<FirebaseFirestoreTypes.DocumentData>,
    ) => {
      return { ...state, ...action.payload };
    },
    clearUserState: () => {
      return initialState;
    },
  },
});

export const {
  saveUser,
  savePassword,
  saveProfilePicture,
  initializeFromFirebase,
  clearUserState,
} = accountSlice.actions;

export default accountSlice.reducer;
