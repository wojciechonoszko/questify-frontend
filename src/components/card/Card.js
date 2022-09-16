import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    deleteTodo,
    changeTodo,
    deleteNewTodo,
    addNewCard,
    changeTodoStatus,
} from '../../redux/todos/operation';