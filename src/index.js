import React from "react";
import ReactDOM from 'react-dom';
import {AppHeader} from './components/AppHeader'
import {SearchPanel} from './components/SearchPanel'
import {ToDoList} from './components/ToDoList'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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

