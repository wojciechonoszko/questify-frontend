import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

import api from './interceptor';
import { getCookie } from './userHelper';

const baseURL = process.env.reactAppBaseUrl;

const axiosHeaderAccessToken = {
    set(token) {
        axios.defaults.header.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const userRegistration = createAsyncThunk(
    'auth/registration',
    async ({ host, ...user }, thunkAPI) => {
        try {
            const { data } = await axios.post(
                `${baseURL}/users/registration`,
                user,
                {
                    withCredentials: true,
                    headers: {
                        hrmt: `&{host}`,
                    },
                }
            );
            axiosHeaderAccessToken.set(data.accessToken);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ host, ...user }, thunkAPI) => {
        try {
            console.log('operations =>');
            console.log('host', host);
            console.log('user', user);
            const { data } = await axios.post(
                `${baseURL}/users/login`,
                user,
                {
                    withCredentials: true,
                    headers: {
                        hrmt: `${host}`,
                    },
                }
            );
            console.log('data', data);
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('userIsLoggedIn', true);
            document.cookie = `refreshToken=${data.refreshToken}`;
            axiosHeaderAccessToken.set(data.accessToken);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
    
);

export const userLogout = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            const refreshTokenFromCookie = getCookie('refreshToken');
            console.log('refreshTokenFromCookie = ', refreshTokenFromCookie);
            const { data } = await api.get(
                `${baseURL}/users/logout`,
                {
                    withCredentials: true,
                    headers: {
                        update: `${refreshTokenFromCookie}`,
                    },
                }
            );
            document.cookie = 'refreshToken=-1;expires=Thu, 01 Jan 1970 00:00:01 GMT';
            // axiosHeaderAccessToken.unset();
            localStorage.removeItem('accessToken');
            localStorage.removeItem('userIsLoggedIn');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const userRefresh = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        console.log('operations.js userRefresh');
        const state = thunkAPI.getState();
        console.log('operations.js state.user = ', state.user);
        const persistedToken = state.user.token;
        console.log('operations.js persistedToken = ', persistedToken);

        if (persistedToken === null) {
            console.log('There is no token, we leave userRefresh');
            return thunkAPI.rejectWithValue('User is logged out');
        }

        axiosHeaderAccessToken.set(persistedToken);

        try {
            const refreshTokenFromCookie = getCookie('refreshToken');
            console.log('refreshTokenFromCookie = ', refreshTokenFromCookie);

            const { data } = await axios.get(
                `${baseURL}/users/refresh`,
                {
                    withCredentials: true,
                    headers: {
                        update: `${refreshTokenFromCookie}`,
                    },
                }
            );
            localStorage.setItem('accessToken', data.accessToken);
            document.cookie = `refreshToken = ${data.refreshToken}`;
            console.log('document.cookie', document.cookie);

            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const userResetPassword = createAsyncThunk(
    'auth/reset-password',
    async (user, thunkAPI) => {
        try {
            const { data } = await axios.post(
                `${baseURL}/users/reset-password`,
                user
            );
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const userChangePassword = createAsyncThunk(
    'auth/change-password',
    async ({ password, link }, thunkAPI) => {
        
        try {
            const { data } = await axios.post(
                `${baseURL}/users/change-password/${link}`,
                { password }
            );
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);


