import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccountState {
  name: string;
  phoneNumber: string;
  email: string;
  dateOfBirth?: number;
  password?: string;
}

const initialState: AccountState = {
  name: "",
  phoneNumber: "",
  email: "",
  dateOfBirth: undefined,
  password: "",
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
  },
});

export const { saveUser, savePassword } = accountSlice.actions;

export default accountSlice.reducer;
