import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './styles/todoWidget.css';


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
                <div className="todo-list">
                    <p className="headline">ToDo's:</p>
                    <div className="tasks">
                        { tasks.map(task => (
                            <div className="task">
                                <p className="name">{task.todo}</p>
                                <input type="checkbox" className="checkbox" />
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default TodoWidget;