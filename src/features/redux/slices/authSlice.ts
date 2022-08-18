import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PhoneState{
    isAuth: boolean
}
    
const initialState: PhoneState = {
    isAuth: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state,action: PayloadAction<boolean>){
            state.isAuth = action.payload
        }
    }
})
export const { setAuth } = authSlice.actions
export default authSlice.reducer
