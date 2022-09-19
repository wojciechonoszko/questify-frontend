import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    deleteTodo,
    changeTodo,
    deleteNewTodo,
    addNewCard,
    changeTodoStatus,
} from '../../redux/todos/operation';

import { newTodoCard } from '../../redux/task/taskSelector';

// import Modals from '../modals'

import TimeDatePicker from '../timePickers/';
import dateAdapted from '../TimePickers/dateAdapted';
import CompletedChallenge from '../CompletedChallenge';
import CompletedCard from '../CompletedCard/CompletedCard';
