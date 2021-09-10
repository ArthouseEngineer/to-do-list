import * as React from "react";
import {CSSProperties, useState} from "react";
import {createStyles} from "@material-ui/core";

const ToDoListItem = (props: any) => {
    const {label} = props;
    const [important, setImportant] = useState(false);
    const [done, setDone] = useState(false);

    const spanStyle: CSSProperties = {
        color: important ? 'steelblue' : 'tomato',
        fontWeight: important ? 'bold' : 'bold'
    };


    const onLabelClick = () => {
        setImportant(!important)
    }


    return (
        <span className="todo-list-item">
            <span
                className="todo-list-item-label"
                style={spanStyle}
                onClick={onLabelClick}
            >
                {label}
            </span>
            <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
            >
                <i className="fa fa-exclamation"/>
            </button>
                        <button type="button"
                                className="btn btn-danger btn-sm float-right"
                        >
                <i className="fa fa-trash"/>
            </button>
        </span>
    );
};

export default ToDoListItem;