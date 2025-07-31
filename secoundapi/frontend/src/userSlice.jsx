import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        "card": [],

    },


reducers: {
    cart: (state, action) => {
        console.log(action.payload);
        state.card[0] = action.payload
    }

}
});
export const { cart } = userSlice.actions;
export default userSlice.reducer;