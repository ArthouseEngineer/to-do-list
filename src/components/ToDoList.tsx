import * as React from "react";
import ToDoListItem from "./ToDoListItem";


export const ToDoList = (props: { toDoItems: any; }) => {

    const {toDoItems} = props;

    const elements = toDoItems.map((item: any) => {
        return (
            <li className="list-group-item">
                <ToDoListItem {...item}/>
            </li>
        )
    });
    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};