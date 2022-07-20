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
                var counter = 0
                const list = []
                    
                for (let i = 0; i < Object.keys(response.data).length; i++) {
                    var entry = response.data[counter].todo
                    list[counter] = entry
                    counter++
                }

                setTasks(list);
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
                <div className="tasks">
                    <p className="task1">{tasks[0]}</p>
                    <p className="task2">{tasks[1]}</p>
                    <p className="task3">{tasks[2]}</p>
                    <p className="task4">{tasks[3]}</p>

                </div>
            }
        </div>
    )
}

export default TodoWidget;