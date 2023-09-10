import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getTodoList = createAsyncThunk('login',async()=>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => (response.data))
    return res
})
const initialState = {
    isAuthenticated: false
}
const authSlice = createSlice({
    name:'Auth',
    initialState,
    reducers:{
        logout: (state)=>{
            localStorage.removeItem('username')
            localStorage.removeItem('password')
            state.isAuthenticated = false
        }
    }
})
export default authSlice.reducer
export const {logout} = authSlice.actions;