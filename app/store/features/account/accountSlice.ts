import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ImageOrVideo } from "react-native-image-crop-picker";

interface AccountState {
  name: string;
  phoneNumber: string;
  email: string;
  dateOfBirth?: number;
  password?: string;
  profilePicture?: ImageOrVideo;
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
    saveProfilePicture: (state, action: PayloadAction<ImageOrVideo>) => {
      return { ...state, profilePicture: action.payload };
    },
  },
});

export const { saveUser, savePassword, saveProfilePicture } =
  accountSlice.actions;

export default accountSlice.reducer;
