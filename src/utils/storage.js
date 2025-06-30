export const getTasks = () => JSON.parse(localStorage.getItem('tasks')) || [];
export const saveTasks = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks));
export const findTaskById = (id) => getTasks().find(task => task.id === Number(id));
