import useTaskForm from '../hooks/useTaskForm';

export default function TaskForm({ initialValues = { name: '', due: '', priority: 'Low' }, onSubmit }) {
  const { values, handleChange } = useTaskForm(initialValues);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
      <input name="name" placeholder="Task Name" value={values.name} onChange={handleChange} required className="p-2 border rounded"  />
      <input name="due" type="date" value={values.due} onChange={handleChange} required className="p-2 border rounded"  />
      <select name="priority" value={values.priority} onChange={handleChange} className="p-2 border rounded" >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save</button>
    </form>
  );
}


