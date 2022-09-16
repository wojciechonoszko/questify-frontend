import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../user/interceptor';
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const addCardToState = createAsyncThunk(
    'todo/addCard',
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

export const deleteNewTodo = createAsyncThunk(
    'todo/deleteNewTodo',
    async (_, thunkAPI) => {
        return null;
    },
);

export const addNewCard = createAsyncThunk(
    'todo/addNewCard',
    async (todo, thunkAPI) => {
        try {
            const { data } = await api.post(
                `${BASE_URL}/todo/add`,
                todo,
            );
            return data;
            } catch (error){
            return thunkAPI.rejectWithValue(error);
        }
    },
);

<<<<<<< HEAD
<<<<<<< HEAD
export const showTodo = createAsyncThunk('todo/get', async (_, thunkAPI) => {
=======
export const showTodos = createAsyncThunk('todo/get', async (_, thunkAPI) => {
>>>>>>> 56f3fee (card)
=======
export const showTodo = createAsyncThunk('todo/get', async (_, thunkAPI) => {
>>>>>>> a7a04a8 (Update operation.js)
    try{
        const { data } = await api.get(
            `${BASE_URL}/todo/all`,
        );
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

<<<<<<< HEAD
<<<<<<< HEAD
export const showTodoDone = createAsyncThunk(
=======
export const showTodosDone = createAsyncThunk(
>>>>>>> 56f3fee (card)
=======
export const showTodoDone = createAsyncThunk(
>>>>>>> a7a04a8 (Update operation.js)
    'todo/done',
    async (_, thunkAPI) => {
        try {
            const { data } = await api.get(
            `${BASE_URL}/todo/done`,
            );
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const showTodoActive = createAsyncThunk(
    'todo/active',
    async (_, thunkAPI) => {
        try {
            const { data } = await api.get(
            `${BASE_URL}/todo/active`,
            );
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const addTodo = createAsyncThunk('todo/add', async (todo, thunkAPI) => {
    try {
        const { data } = await api.post(
            `${BASE_URL}/todo/add`,
            todo,
        );
        return data;
    }catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const changeTodoStatus = createAsyncThunk(
    'todo/changeStatus',
    async ({ id, isActive }, thunkAPI) => {
        try {
            const { data } = await api.patch(
                `${BASE_URL}/todo/status/${id}`,
                { isActive: isActive },
            );
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const changeTodo = createAsyncThunk(
    'todo/change',
    async ({ id, ...item }, thunkAPI) => {
        try {
            const { data } = await api.put(
                `${BASE_URL}/todo/update/${id}`,
                item,
            );
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const deleteTodo = createAsyncThunk(
    'todo/delete',
    async (id, thunkAPI) => {
        try {
            await api.delete(
                `${BASE_URL}/todo/remove/${id}`,
                id,
            );
            return id;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)