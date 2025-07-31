import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        "card": [],
        "cartitems":[]
    },


reducers: {
    cart: (state, action) => {
        console.log(action.payload);
        state.card[0] = action.payload
    },
    addtocart:(add,action)=>{
        add.cartitems.push(action.payload)
    }

}
});
export const { cart,addtocart } = userSlice.actions;
export default userSlice.reducer;