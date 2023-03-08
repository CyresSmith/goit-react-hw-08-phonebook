import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

export const userAPI = createApi({
  reducerPath: 'userAPI',

  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/users',
  }),

  tagTypes: ['auth'],

  endpoints: builder => ({
    userSignUp: builder.mutation({
      query: user => ({
        url: '/signup',
        method: 'POST',
        data: user,
      }),
      invalidatesTags: ['auth'],
    }),

    userLogIn: builder.mutation({
      query: user => ({
        url: '/login',
        method: 'POST',
        data: user,
      }),
      invalidatesTags: ['auth'],
    }),

    userLogOut: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
      invalidatesTags: ['auth'],
    }),

    getCurrentUser: builder.query({
      query: () => ({
        url: '/current',
        method: 'GET',
      }),
      providesTags: ['auth'],
    }),
  }),
});

export const {
  useUserSignUpMutation,
  useUserLogInMutation,
  useUserLogOutMutation,
  useGetCurrentUserQuery,
} = userAPI;
