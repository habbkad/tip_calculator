import { configureStore } from "@reduxjs/toolkit";
import tipSlice from "./reducer/tip_reducer";

export default configureStore({
  reducer: { tip: tipSlice },
});
