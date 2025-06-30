import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TaskTable from '../components/TaskTable';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import { getTasks } from '../utils/storage';

const TASKS_PER_PAGE = 5;

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const allTasks = getTasks();
    setTasks(allTasks);
    setFilteredTasks(allTasks);
  }, []);

  useEffect(() => {
    const filtered = tasks.filter(task =>
      task.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTasks(filtered);
    setCurrentPage(1);
  }, [searchTerm, tasks]);

  const totalPages = Math.ceil(filteredTasks.length / TASKS_PER_PAGE);
  const startIdx = (currentPage - 1) * TASKS_PER_PAGE;
  const currentTasks = filteredTasks.slice(startIdx, startIdx + TASKS_PER_PAGE);

  return (
    <div className='p-8'>
      <h1 className='text-4xl font-semibold text-red-700 text-center'>Task Manager</h1>
      <Link to="/create" className='inline-block mb-4 text-blue-600 hover:underline mt-5'>+ Add Task</Link>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <TaskTable tasks={currentTasks} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
} 