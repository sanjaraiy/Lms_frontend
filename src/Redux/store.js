import {configureStore} from "@reduxjs/toolkit";

import authSliceReducer from "./slices/authSlice";
import courseSliceReducer from "./slices/courseSlice";
import razorpaySliceReducer from "./slices/razorpaySlice";
const store=configureStore({
    reducer: {
        auth: authSliceReducer,
        course: courseSliceReducer,
        razorpay: razorpaySliceReducer,

    },
    devTools:true
});

export default store;