import { configureStore } from "@reduxjs/toolkit";
import auth from "./slice/auth";
const storeSlices = configureStore({
    reducer:{auth}
})
export default storeSlices