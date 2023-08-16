import { configureStore } from "@reduxjs/toolkit";
import auth from "./slice/auth";
import adminHome from "./slice/admin/adminHome";
const storeSlices = configureStore({
  reducer: { auth, adminHome },
});
export default storeSlices;
