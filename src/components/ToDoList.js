import React from "react";
import ToDoListItem from './ToDoListItem';

const ToDoList = (props) => {
    const {toDoItems} = props;
    const elements = toDoItems.toJS().map(
        (item, key) => {
        return (
            <li key={key}>
                <ToDoListItem {...item}/>
            </li>
        )
    });
    return (
        <ul>
            {elements}
        </ul>
    );
};

export default ToDoList;