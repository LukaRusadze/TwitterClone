import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccountState {
  name: string;
  phoneNumber: string;
  email: string;
  dateOfBirth?: number;
}

const initialState: AccountState = {
  name: "",
  phoneNumber: "",
  email: "",
  dateOfBirth: undefined,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<AccountState>) => {
      state = action.payload;
    },
  },
});

export const { saveUser } = accountSlice.actions;

export default accountSlice.reducer;
