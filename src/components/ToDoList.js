import React from "react";

import {ToDoListItem} from './ToDoListItem';


export const ToDoList = () => {
    return (
        <ul>
            <li><ToDoListItem/></li>
            <li><ToDoListItem/></li>
        </ul>
    );
};