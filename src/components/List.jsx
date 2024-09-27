import React, { useContext } from 'react';
import { TodoContext } from '../context/AppContext';
import { NoData } from './NoData';

export const List = () => {
	const { todoArray, deleteTodo, finishTodo } = useContext(TodoContext);

	const Wrapper = {
		backgroundColor: '#a9cce3',
		maxWidth: '600px',
		margin: '25px auto',
		borderRadius: '5px',
	};

	const showTodos = () => {
		if (todoArray.length === 0) {
			return <NoData title='No Todo Available' />;
		}

		return (
			<ul style={{ listStyle: 'none', padding: '15px' }}>
				{todoArray.map((todo, index) => (
					<li
						key={index}
						style={{
							marginBottom: '15px',
							backgroundColor: 'white',
							padding: '10px',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							borderRadius: '8px',
						}}>
						<span style={{ width: '75%' }}>{todo}</span>

						<div style={{ display: 'flex', gap: '10px' }}>
							<button
								style={{
									padding: '8px',
									backgroundColor: 'orange',
									border: '1px solid orange',
									borderRadius: '4px',
									cursor: 'pointer',
								}}
								onClick={() => finishTodo(index)}>
								Finished
							</button>
							<button
								style={{
									padding: '8px',
									backgroundColor: 'red',
									border: '1px solid red',
									borderRadius: '4px',
									color: '#fff',
									cursor: 'pointer',
								}}
								onClick={() => deleteTodo(index)}>
								Delete
							</button>
						</div>
					</li>
				))}
			</ul>
		);
	};
	return <div style={Wrapper}>{showTodos()}</div>;
};
