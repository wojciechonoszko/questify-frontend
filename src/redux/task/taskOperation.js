import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../user/interceptor';
// const baseUrl = process.env.reactAppBaseUrl;
const baseUrl = process.env.reactAppBaseUrl;
// const baseUrl = 'https://connections-api.herokuapp.com/';

export const addCardToState = createAsyncThunk(
    'task/addCard',
    async (type, thunkAPI) => {
        return {
            title: '',
            category: 'FAMILY',
            type: type,
            time: Date.now(),
            level: 'Normal',
        };
    },
);

export const deleteNewTask = createAsyncThunk(
    'task/deleteNewTask',
    async (_, thunkAPI) => {
        return null;
    },
);

export const addNewCard = createAsyncThunk(
    'task/addNewCard',
    async (task, thunkAPI) => {
        try {
            const { data } = await api.post(
                `${baseUrl}/task/add`,
                task,
            );
            return data;
            } catch (error){
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const showTask = createAsyncThunk('task/get', async (_, thunkAPI) => {
    try{
        const { data } = await api.get(
            `${baseUrl}/task/all`,
        );
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const showTaskDone = createAsyncThunk(
    'task/done',
    async (_, thunkAPI) => {
        try {
            const { data } = await api.get(
            `${baseUrl}/task/done`,
            );
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const showTaskActive = createAsyncThunk(
    'task/active',
    async (_, thunkAPI) => {
        try {
            const { data } = await api.get(
            `${baseUrl}/task/active`,
            );
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const addTask = createAsyncThunk('task/add', async (task, thunkAPI) => {
    try {
        const { data } = await api.post(
            `${baseUrl}/task/add`,
            task,
        );
        return data;
    }catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const changeTaskStatus = createAsyncThunk(
    'task/changeStatus',
    async ({ id, isActive }, thunkAPI) => {
        try {
            const { data } = await api.patch(
                `${baseUrl}/task/status/${id}`,
                { isActive: isActive },
            );
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const changeTask = createAsyncThunk(
    'task/change',
    async ({ id, ...item }, thunkAPI) => {
        try {
            const { data } = await api.put(
                `${baseUrl}/task/update/${id}`,
                item,
            );
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const deleteTask = createAsyncThunk(
    'task/delete',
    async (id, thunkAPI) => {
        try {
            await api.delete(
                `${baseUrl}/task/remove/${id}`,
                id,
            );
            return id;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)