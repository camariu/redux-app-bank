import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customersSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;