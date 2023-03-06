import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

export const userAPI = createApi({
  reducerPath: 'userAPI',

  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/users',
  }),

  tagTypes: ['userAPI'],

  endpoints: builder => ({
    userSignUp: builder.mutation({
      query: user => ({
        url: '/signup',
        method: 'POST',
        data: user,
      }),
      invalidatesTags: ['userAPI'],
    }),

    userLogIn: builder.mutation({
      query: user => ({
        url: '/login',
        method: 'POST',
        data: user,
      }),
      invalidatesTags: ['userAPI'],
    }),

    userLogOut: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
      invalidatesTags: ['userAPI'],
    }),

    getCurrentUser: builder.query({
      query: () => '/current',
      providesTags: ['Contacts'],
    }),
  }),
});

export const {
  useUserSignUpMutation,
  useUserLogInMutation,
  useUserLogOutMutation,
  useGetCurrentUserQuery,
} = userAPI;
