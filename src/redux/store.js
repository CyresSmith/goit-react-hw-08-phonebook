import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsAPI';
import { userAPI } from './userAPI';
import { filter } from './filterSlice';
import { auth } from './authSlice';

const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
    filter,
    auth,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
    userAPI.middleware,
  ],
});

export default store;
