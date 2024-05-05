// redux/reducers.js
const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTask = action.payload;
      const updatedTasksAdd = [...state.tasks, newTask];
      localStorage.setItem('tasks', JSON.stringify(updatedTasksAdd));
      return {
        ...state,
        tasks: updatedTasksAdd,
      };
    case 'DELETE_TASK':
      const taskId = action.payload.id;
      const updatedTasksDelete = state.tasks.filter((task) => task.id !== taskId);
      localStorage.setItem('tasks', JSON.stringify(updatedTasksDelete));
      return {
        ...state,
        tasks: updatedTasksDelete,
      };
    default:
      return state;
  }
};

export default reducer;
