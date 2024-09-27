import React, { useState, useEffect, useContext } from 'react';
import style from './todoform.module.css';
import Check from './SvgIcons';
import { useForm } from 'react-hook-form';
import { TodoContext } from '../context/AppContext';

export const TodoForm = () => {
	const { updateTodos } = useContext(TodoContext);
	const {
		register,
		handleSubmit,
		formState: { errors },
		setFocus,
		resetField,
	} = useForm();

	const onSubmit = (data) => {
		const { todo } = data;
		if (!todo) {
			setFocus('todo');
		} else {
			updateTodos(todo);
			resetField('todo');
		}
	};

	return (
		<div className={style.wrapper}>
			<h1>
				<Check style={{ width: '40px' }} />
				My ToDo's
			</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<input
						type='text'
						{...register('todo', {
							required: 'Todo is required',
							message: 'Enter string',
						})}
						placeholder='Todo'
						className='login__input'
						style={{ width: '100%' }}
					/>
					<p className='error-message'>{errors.todo?.message}</p>
				</div>
				<button>Add</button>
			</form>
		</div>
	);
};
