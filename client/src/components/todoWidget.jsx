import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './styles/weatherWidget.css';


const TodoWidget = () => {
    const [tasks, setTasks] = useState();
    const [fetchCompleted, setFetchCompleted] = useState(false);

    useEffect(() => {
        axios.get('/api/todo_list').then((response) => {
            if (Object.keys(response.data).length !== 0) {
                setTasks(response.data);
                setFetchCompleted(true);
            }
        });
    }, []);

    return (
        <div className='todo_list-widget'>
            {
                fetchCompleted === false ?
                    <div className="todo_list">
                        <div className="tasks">
                            <p className="task">Keine ToDo's</p>
                        </div>
                    </div>
                :
                <div className="weather">
                <div className="temp-display">
                    <div className="current-weather">
                    <p className="task">{tasks.tasks}</p>
                    </div>
                </div>
                <div className="weather-sidebar">

                </div>
                </div>
            }
        </div>
    )
}

export default TodoWidget;