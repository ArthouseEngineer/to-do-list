import React from "react";
import ReactDOM from 'react-dom';
import {AppHeader} from './components/AppHeader'
import {SearchPanel} from './components/SearchPanel'
import {ToDoList} from './components/ToDoList'

const App = () => {
    const toDoData = [
        {label: 'Drink some tea', important: false},
        {label: 'Make this ToDoList', important: true},
        {label: 'Have a nice Day', important: false}
    ];
    return <div>
        <AppHeader/>
        <SearchPanel/>
        <ToDoList toDoItems={toDoData}/>
    </div>
};

ReactDOM.render(<App/>, document.getElementById('root'));

