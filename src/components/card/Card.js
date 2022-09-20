import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    deleteTask,
    changeTask,
    deleteNewTask,
    addNewCard,
    changeTaskStatus,
} from '../../redux/task/operation';

import { newTaskCard } from '../../redux/task/taskSelector';

// import Modals from '../modals'

import TimeDatePicker from '../timePickers/';
import dateAdapted from '../TimePickers/dateAdapted';
import CompletedChallenge from '../CompletedChallenge';
import CompletedCard from '../CompletedCard/CompletedCard';

import saveIcon from '../../images/save_icon.svg';
import trophy from '../../images/trophy.svg';
import styles from './Card.module.css';

const Card = ({ data, card, isNewCard }) => {

    const [completed, setCompleted] = useState(false);
    const [categoryModal, setCategoryModal] = useState(false);
    const [modal, setModal] = useState(false);
    const [edit, setEdit] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [difficult, setDifficult] = useState('');
    const [value, setValue] = useState('');
    const [categoryCard, setCategoryCard] = useState('family');
    const [timeDate, setTimeDate] = useState(new Date());

    const dispatch = useDispatch();
    const cardFromState = useSelector(newTaskCard);

    useEffect(() => {
        setDifficult(card.level);
        setValue(card.title);
        setCategoryCard(card.category);
        let coverCard = new Date(card.time);
        coverCard = dateAdapted(coverCard);
        setTimeDate(coverCard);
    }, []);

    function onClick() {
        setModal(!modal);
    }

    function categoryModalHandler() {
        setCategoryModal(!categoryModal);
    }

    function change(data) {
        setDifficult(data);
        onClick();
    }

    function deleteHandler(bool) {
        if (bool) {
            dispatch(deleteTask(card._id));
            onDelete();
        }
        onDelete();
    }

    function onDelete() {
        setDeleteModal(!deleteModal);
    }

    function onEdit(error) {
        if (!card.isActive) {
            return;
        }
        if (!edit) setEdit(true);
    }

    function changeValue(event) {
        setValue(event.target.value);
    }

    const closeAndSave = () => {
        setEdit(false);

        
    }

}
