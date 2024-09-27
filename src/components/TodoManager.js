import { useState, useEffect } from 'react';

const TodoManager = () => {
	const [todoArray, setTodoArray] = useState([]);
	const [finishTaskArray, setFinishTaskArray] = useState([]);

	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
		const storedFinishedTasks =
			JSON.parse(localStorage.getItem('finishedTasks')) || [];
		setTodoArray(storedTodos);
		setFinishTaskArray(storedFinishedTasks);
	}, []);

	const updateTodos = (newTodos) => {
		setTodoArray((prevArray) => {
			const updatedArray = [...prevArray, newTodos];
			localStorage.setItem('todos', JSON.stringify(updatedArray));
			return updatedArray;
		});
	};

	const deleteTodo = (index) => {
		const confirmDelete = window.confirm(
			'Are you sure you want to delete this todo?'
		);
		if (confirmDelete) {
			setTodoArray((prevArray) => {
				const updatedArray = prevArray.filter((_, i) => i !== index);
				localStorage.setItem('todos', JSON.stringify(updatedArray));
				return updatedArray;
			});
		}
	};

	const finishTodo = (index) => {
		const todoToFinish = todoArray[index];
		const updatedTodos = todoArray.filter((_, i) => i !== index);
		setTodoArray(updatedTodos);
		localStorage.setItem('todos', JSON.stringify(updatedTodos));

		const updatedFinishedArray = [...finishTaskArray, todoToFinish];
		setFinishTaskArray(updatedFinishedArray);
		localStorage.setItem('finishedTasks', JSON.stringify(updatedFinishedArray));
	};

	const unfinishTodo = (index) => {
		const taskToUnfinish = finishTaskArray[index];

		const updatedFinishedTasks = finishTaskArray.filter((_, i) => i !== index);
		setFinishTaskArray(updatedFinishedTasks);
		localStorage.setItem('finishedTasks', JSON.stringify(updatedFinishedTasks));

		const updatedTodos = [...todoArray, taskToUnfinish];
		setTodoArray(updatedTodos);
		localStorage.setItem('todos', JSON.stringify(updatedTodos));
	};

	return {
		todoArray,
		finishTaskArray,
		updateTodos,
		deleteTodo,
		finishTodo,
		unfinishTodo,
	};
};

export default TodoManager;
