import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    deleteTask,
=======
    // deleteTask,
>>>>>>> e488aab (update card)
    changeTask,
    deleteNewTask,
    addNewCard,
    changeTaskStatus,
} from '../../redux/task/taskOperation';

import { newTaskCard } from '../../redux/task/taskSelector';

// import Modals from '../modals'
// difficultModal
// deletemodal
// categoryModal

import TimeDatePicker from '../timePickers/TimePickers';
import dateDisplay from '../timePickers/dateDisplay';
import CompletedChallenge from '../completedChallenge/CompletedChallenge';
import CompletedCard from '../completedCard/CompletedCard';

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
        coverCard = dateDisplay(coverCard);
        setTimeDate(coverCard);
    }
        , [card.category, card.level, card.time, card.title]
    );

    function onClick() {
        setModal(!modal);
    }

    function categoryModalHandler() {
        setCategoryModal(!categoryModal);
    }

    // function change(data) {
    //     setDifficult(data);
    //     onClick();
    // }

    // function deleteHandler(bool) {
    //     if (bool) {
    //         dispatch(deleteTask(card._id));
    //         onDelete();
    //     }
    //     onDelete();
    // }

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

        const newCard = {
            level: difficult,
            title: value,
            time: timeDate.data || card.time,
            category: categoryCard,
            type: card.type,
            isActive: true,
        };
        dispatch(changeTask({ id: card._id, ...newCard }));
    };

    const deleteNewCard = () => {
        dispatch(deleteNewTask());
    };

    const addNewTask = () => {
        dispatch(
            addNewCard({
                title: value,
                category: categoryCard,
                type: cardFromState.type,
                time: timeDate.data,
                level: difficult,
            }),
        );
        const display = dateDisplay(timeDate.data);
        setTimeDate(display);
    };


    const addTaskDone = () => {
        dispatch(changeTaskStatus({ id: card._id, isActive: false }));
    };

    // function changeType(data) {
    //     setCategoryCard(data);
    //     categoryModalHandler();
    // }

    function takeTime(date) {
        setTimeDate(date);
    }

    const changeCompleted = () => {
        if (!card.isActive) {
            return;
        }
        setCompleted(true);
    };

    return (
        <>
            {completed ? (
                card.type === 'TASK' ? (
                    <CompletedCard
                        change={addTaskDone}
                        title={card.title}
                        id={card._id}
                    />
                ) : (
                    <CompletedChallenge
                        change={addTaskDone}
                        title={card.title}
                        id={card._id}
                    />
                ) ): (
                <li
                    className={`${styles.card} ${card.type === 'CHALLENGE' ? styles.challenge : styles.task}`}
                    onClick={onEdit}
                >
                    {/* {card.isActive && modal && <DifficultModal change={change} />}
                    {deleteModal && <DeleteModule change={deleteHandler} />}
                    {card.isActive && categoryModal && (<CategoryModal change={changeType} />
                    )} */}

                    <p className={styles.cardCategoryName}>
                        {edit ? (
                            <>
                                <span
                                    className={(styles.cardCategoryCircle,
                                        difficult === 'Normal'
                                            ? styles.secondOption
                                            : difficult === 'Hard'
                                                ? styles.thirdOption
                                                : styles.firstOption)
                                    }
                                > &#9679; fread </span>
                    
                                <span className={styles.cardCategory} onClick={onClick}>
                                    {difficult}
                                </span>
                            </>
                        ) : (
                        
                            <span className={card.isActive ? styles.setLevel : styles.inactiveCard} onClick={onClick}>
                                <span className={(styles.cardCategoryCircle,
                                    difficult === 'Normal'
                                        ? styles.secondOption
                                        : difficult === 'Hard'
                                            ? styles.thirdOption
                                            : styles.firstOption)
                                }>&#9679; </span>
                                <span className={styles.cardCategory}>{difficult}</span>
                            </span>
                        )}

                        {card.type === 'CHALLENGE' ? (
                            <img
                                src={trophy}
                                alt=""
                                className={card.isActive ? styles.cardCategoryStart : styles.cardCategoryStart_inactive}
                                onClick={changeCompleted}
                            />
                        ) : (
                            <span
                                className={
                                    card.isActive
                                        ? styles.cardCategoryStart
                                        : styles.cardCategoryStart_inactive
                                }
                                onClick={changeCompleted}
                            >
                                {' '}
                                &#9733;
                            </span>
                        )}
                    </p>
                    {edit && !isNewCard && <p className={styles.editTitle}>edit quest</p>}
                    {isNewCard && <p className={styles.editTitle}> Create New Quest</p>}

                    {isNewCard || edit ? (
                        <form className={styles.form}>
                            <input
                                autoFocus
                                className={`${styles.input} ${card.type === 'CHALLENGE' && styles.inputChallenge}`}
                                type='text'
                                value={value}
                                onChange={changeValue}
                            />
                        </form>
                    ) : (
                        <>
                            {card.type === 'CHALLENGE' ? (
                                <h2 className={styles.challengeHeader}>CHALLENGE</h2>
                                ) : (
                            <span className={styles.taskHeader}>TASK</span>
                                )}
                            <h2
                                className={`${styles.cardTitle} ${card.type === 'CHALLENGE' && styles.cardTitle_challenge
                                    }`}
                            >
                                {card.title}
                            </h2>
                        </>
                    )}

                    <div className={styles.cardDate}>
                        <p className={styles.timeText}>

                            {timeDate.dayName}
                            {!edit && !isNewCard && <>,&nbsp;{timeDate.time}</>}
                        </p>
                        {edit && <TimeDatePicker time={takeTime} />}
                        {isNewCard && <TimeDatePicker time={takeTime} />}
                    </div>

                    <div className={styles.bottomMenu}>
                        {edit ? (
                            <>
                                <p
                                    className={`${styles.cardType} ${categoryCard.toLowerCase()}`}
                                    onClick={categoryModalHandler}
                                >
                                    {categoryCard}
                                </p>
                            </>
                        ) : (
                            <>
                                <p
                                    className={`${styles.cardType}
                                            ${card.category === 'LEARNING' && styles.learning}
                                            ${card.category === 'LEISURE' && styles.leisure}
                                            ${card.category === 'FAMILY' && styles.family}
                                            ${card.category === 'HEALTH' && styles.health}
                                            ${card.category === 'STUFF' && styles.stuff}
                                            ${card.category === 'WORK' && styles.work}
                                            ${!card.isActive && styles.inactiveCard}
                                        `}
                                    onClick={categoryModalHandler}
                                >
                                    {card.category}{' '}
                                    {card.isActive && <i className={styles.arrowDown}>&#9207;</i>}

                                </p>
                            </>
                        )}

                        {isNewCard && (
                            <>
                                <div className={styles.buttons}>
                                    <span className={styles.cross} onClick={deleteNewCard}>
                                        &#10006;
                                        </span>
                                        <span onClick={addNewTask} className={styles.start}>
                                            START
                                        </span>

                                </div>
                            </>
                        )}
                        {edit && !isNewCard && (
                            <>
                                <div className={styles.buttons}>
                                    <div className={styles.saveIcon} onClick={closeAndSave}>
                                        <img src={saveIcon} alt="save card" />
                                    </div>

                                    <span className={styles.cross} onClick={onDelete}>
                                        &#10006;
                                    </span>
                                    <span onClick={changeCompleted} className={styles.checked}>
                                        &#10004;
                                    </span>
                                </div>
                            </>
                        )}
                    </div>
                </li>
            )}
        </>
     
<<<<<<< HEAD
    )
}

=======
    deleteTodo,
    changeTodo,
    deleteNewTodo,
    addNewCard,
    changeTodoStatus,
} from '../../redux/todos/operation';
<<<<<<< HEAD
>>>>>>> 56f3fee (card)
=======
=======
    deleteTask,
    changeTask,
    deleteNewTask,
    addNewCard,
    changeTaskStatus,
} from '../../redux/task/operation';
>>>>>>> 46be25a (card)

import { newTaskCard } from '../../redux/task/taskSelector';

// import Modals from '../modals'

import TimeDatePicker from '../timePickers/';
import dateAdapted from '../TimePickers/dateAdapted';
import CompletedChallenge from '../CompletedChallenge';
import CompletedCard from '../CompletedCard/CompletedCard';
<<<<<<< HEAD
>>>>>>> 062dc66 (update card and add time picker)
=======

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
>>>>>>> 46be25a (card)
=======
    );
};

export default Card;
>>>>>>> 9687e11 (Update Card.js)
