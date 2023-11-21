import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';

import todoIcon from './assets/direct-hit.png';
import doingIcon from './assets/glowing-star.png';
import doneIcon from './assets/check-mark-button.png';
import './App.css'

// const saveTasks = localStorage.getItem('tasks');


function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
		const newTasks = tasks.filter((task, index) => index !== taskIndex);
		setTasks(newTasks);
	};

  // 메모 기능 추가 
  const handleMemo = (taskIndex, memo) => {
    const updatedTasks = [...tasks]; 
    updatedTasks[taskIndex] = { ...updatedTasks[taskIndex], memo }; 
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div className='app'>
    <TaskForm setTasks={setTasks} />
    <main className='app_main'>
        <TaskColumn title='할 일' icon={todoIcon} tasks={tasks} status='todo' handleDelete={handleDelete} handleMemo={handleMemo} />
				<TaskColumn title='진행중' icon={doingIcon} tasks={tasks} status='doing' handleDelete={handleDelete} handleMemo={handleMemo} />
				<TaskColumn title='완 료' icon={doneIcon} tasks={tasks} status='done' handleDelete={handleDelete} handleMemo={handleMemo} />
    </main>
  </div>
  );
}

export default App
