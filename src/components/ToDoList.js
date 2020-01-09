import React from "react";
import {ToDoListItem} from './ToDoListItem';


export const ToDoList = (props) => {

    const {toDoItems} = props;

    const elements = toDoItems.map((item) => {
        return (
            <li>
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