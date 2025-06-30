import { Link } from 'react-router-dom';

export default function TaskTable({ tasks }) {
  if (!tasks.length) return <p className="text-center text-gray-500">No tasks found.</p>;

  return (
    <table className="w-full mt-4 border-collapse">
      <thead>
        <tr className="bg-gray-400"> 
          <th className="border px-4 py-2">Task</th>
          <th className="border px-4 py-2">Due Date</th>
          <th className="border px-4 py-2">Priority</th>
          <th className="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <tr key={task.id} className="hover:bg-gray-600">
            <td className="border px-4 py-3 ">{task.name}</td>
            <td className="border px-4 py-3">{task.due}</td>
            <td className="border px-4 py-3">{task.priority}</td>
            <td>
              <Link to={`/edit/${task.id}`} className="text-blue-600 hover:underline">Edit</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}