import React, { useState, useEffect } from 'react';
import { TodoContext } from './AppContext';
import TodoManager from '../components/TodoManager';

const TodoContextProvider = ({ children }) => {
	const [username, setUsername] = useState(null);
	const {
		todoArray,
		finishTaskArray,
		updateTodos,
		deleteTodo,
		finishTodo,
		unfinishTodo,
	} = TodoManager();

	return (
		<TodoContext.Provider
			value={{
				username,
				setUsername,
				todoArray,
				updateTodos,
				deleteTodo,
				finishTodo,
				finishTaskArray,
				unfinishTodo,
			}}>
			{children}
		</TodoContext.Provider>
	);
};

export default TodoContextProvider;
