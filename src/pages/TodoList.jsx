import React, { useState, useEffect, useContext } from 'react';
import { TodoContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import './todolist.css';
import { TodoForm } from '../components/TodoForm';
import { List } from '../components/List';
import { FinishedTask } from '../components/FinishedTask';
export const TodoList = () => {
	const { username } = useContext(TodoContext);
	const [name, setUsername] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		const storedUsername = localStorage.getItem('username');
		if (storedUsername) {
			setUsername(storedUsername);
		}
	}, []);

	const handleLogout = () => {
		setUsername('');
		localStorage.removeItem('username');
		navigate('/');
	};

	return (
		<>
			<div className='main-header'>
				Welcome:{' '}
				<span style={{ color: 'deeppink', fontWeight: '700' }}>
					{username ? username : name}
				</span>
				<button
					onClick={handleLogout}
					style={{
						position: 'absolute',
						top: '7px',
						right: '10px',
						padding: '8px',
						backgroundColor: 'orange',
						color: '#000',
						border: '1px solid orange',
						cursor: 'pointer',
					}}>
					Logout
				</button>
			</div>
			<TodoForm />
			<List />
			<FinishedTask />
		</>
	);
};
