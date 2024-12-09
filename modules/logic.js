const Logic = (() => {
    const STORAGE_KEY = "tasks";
  
    function getTasks() {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    }
  
    function saveTasks(tasks) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }
  
    function addTask(taskText, category, priority) {
      const tasks = getTasks();
      tasks.push({ text: taskText, category, priority, completed: false });
      saveTasks(tasks);
    }
  
    function removeTask(taskText) {
      const tasks = getTasks();
      saveTasks(tasks.filter(task => task.text !== taskText));
    }
  
    function editTask(oldText, newText, newCategory, newPriority) {
      const tasks = getTasks();
      const updatedTasks = tasks.map(task =>
        task.text === oldText
          ? { ...task, text: newText, category: newCategory, priority: newPriority }
          : task
      );
      saveTasks(updatedTasks);
    }
  
    function toggleTaskCompletion(taskText) {
      const tasks = getTasks();
      const updatedTasks = tasks.map(task =>
        task.text === taskText ? { ...task, completed: !task.completed } : task
      );
      saveTasks(updatedTasks);
    }
  
    return { getTasks, addTask, removeTask, editTask, toggleTaskCompletion };
  })();
  export default Logic;
  