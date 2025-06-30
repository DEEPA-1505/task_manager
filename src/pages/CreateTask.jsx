import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import { getTasks, saveTasks } from '../utils/storage';

export default function CreateTask() {
  const navigate = useNavigate();

  const handleSubmit = (task) => {
    const tasks = getTasks();
    tasks.push({ id: Date.now(), ...task });
    saveTasks(tasks);
    navigate('/');
  };

  return (
    <div className='p-10'>
      <h2>Create Task</h2>
      <TaskForm onSubmit={handleSubmit} />
    </div>
  );
}

