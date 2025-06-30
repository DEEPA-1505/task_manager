import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TaskForm from '../components/TaskForm';
import { getTasks, saveTasks, findTaskById } from '../utils/storage';

export default function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [taskData, setTaskData] = useState(null);

  useEffect(() => {
    const task = findTaskById(id);
    if (task) setTaskData(task);
  }, [id]);

  const handleSubmit = (updatedTask) => {
    const tasks = getTasks().map(task =>
      task.id === Number(id) ? { ...task, ...updatedTask } : task
    );
    saveTasks(tasks);
    navigate('/');
  };

  return (
    <div className='p-20'>
      <h2 className='text-2xl font-semibold mb-4'>Edit Task</h2>
      {taskData && <TaskForm initialValues={taskData} onSubmit={handleSubmit} />}
    </div>
  );
}
