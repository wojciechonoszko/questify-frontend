import { createSlice } from '@reduxjs/toolkit';
import {
    addCardToState,
    addNewCard,
    addTask,
    changeTask,
    changeTaskStatus,
    deleteNewTask,
    deleteTask,
    showTaskActive,
    showTaskDone
} from './taskOperation';

const initialState = {
    activeTask: [],
    completedTask: [],
    newTaskCard: '',
    error: null,
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    extraReducers: {
        [addNewCard.fulfilled](state, action) {
            state.activeTask = [action.payload.result, ...state.activeTask];
            state.newTaskCard = null;
        },

        [addNewCard.rejected]: (state, action) => {
            state.error = {
                status: action.payload.response.status,
                message: action.payload.response.data.message,
            };
        },

        [deleteNewTask.fulfilled](state, action) {
            state.newTaskCard = action.payload;
            state.error = null;
        },

        [deleteNewTask.rejected](state, action) {
            state.error = {
                status: action.payload.response.status,
                message: action.payload.response.data.message,
            };
        },

        [addCardToState.fulfilled](state, action) {
            state.newTaskCard = action.payload;
        },

        [addCardToState.rejected](state, action) {
            state.error = {
                status: action.payload.response.status,
                message: action.payload.response.data.message,
            };
        },

        [showTaskDone.fulfilled](state, action) {
            state.completedTask = action.payload;
        },

        [showTaskDone.rejected](state, action) {
            state.error = {
                status: action.payload.response.status,
                message: action.payload.response.data.message,
            };
        },

        [showTaskActive.fulfilled](state, action) {
            state.activeTask = action.payload;
        },

        [showTaskActive.rejected](state, action) {
            state.error = {
                status: action.payload.response.status,
                message: action.payload.response.data.message,
            };
        },

        [addTask.fulfilled]: (state, action) => {
            state.activeTask = [action.payload.result, ...state.activeTask];
        },

        [addTask.rejected]: (state, action) => {
            state.error = {
                status: action.payload.response.status,
                message: action.payload.response.data.message,
            };
        },

        [deleteTask.fulfilled]: (state, action) => {
            state.activeTask = state.activeTask.filter(item => {
                return item._id !== action.payload;
            });
            state.completedTask = state.completedTask.filter(
                item => item._id !== action.payload,
            );
        },

        [deleteTask.rejected]: (state, action) => {
            state.error = {
                status: action.payload.response.status,
                message: action.payload.response.data.message,
            };
        },

        [changeTaskStatus.fulfilled]: (state, action) => {
            state.activeTask = state.activeTask.filter(item => {
                return item._id !== action.payload.result._id;
            });
            state.completedTask = [...state.completedTask, action.payload.result];
        },

        [changeTaskStatus.rejected]: (state, action) => {
            state.error = {
                status: action.payload.response.status,
                message: action.payload.response.data.message,
            };
        },

        [changeTask.fulfilled]: (state, action) => {
            state.activeTask = state.activeTask.filter(item => {
                return item._id !== action.payload.result._id;
            });
            state.activeTask = [...state.activeTask, action.payload.result];
        },

        [changeTask.rejected]: (state, action) => {
            state.error = {
                status: action.payload.response.status,
                message: action.payload.message,
            };
        },
    },
});

export default taskSlice.reducer;