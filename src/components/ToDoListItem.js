import React from "react";

export const ToDoListItem = (props) => {

    const {label,important = false} = props;

    const spanStyle = {
        color: important ? 'tomato' : 'black'
    };

    return <span style={spanStyle}>{label}</span>;
};