import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PhotoFile } from "react-native-vision-camera";

interface AccountState {
  name: string;
  phoneNumber: string;
  email: string;
  dateOfBirth?: number;
  password?: string;
  profilePicture?: PhotoFile;
}

const initialState: AccountState = {
  name: "",
  phoneNumber: "",
  email: "",
  dateOfBirth: undefined,
  password: "",
  profilePicture: undefined,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<AccountState>) => {
      return { ...state, ...action.payload };
    },
    savePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    saveProfilePicture: (state, action: PayloadAction<PhotoFile>) => {
      state.profilePicture = action.payload;
    },
  },
});

export const { saveUser, savePassword, saveProfilePicture } =
  accountSlice.actions;

export default accountSlice.reducer;
