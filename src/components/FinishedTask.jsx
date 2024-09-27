import React, { useContext } from 'react';
import { TodoContext } from '../context/AppContext';
import { NoData } from './NoData';
export const FinishedTask = () => {
	const { finishTaskArray, unfinishTodo } = useContext(TodoContext);
	const Wrapper = {
		backgroundColor: 'green',
		maxWidth: '600px',
		margin: '25px auto',
		borderRadius: '5px',
	};

	const finishTodoList = () => {
		if ((finishTaskArray || []).length === 0) {
			return <NoData title='No Finished Task' colorCode='#fff' />;
		}

		return (
			<ul style={{ listStyle: 'none', padding: '15px' }}>
				{finishTaskArray.map((todo, index) => (
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
								onClick={() => unfinishTodo(index)}>
								Unfinished
							</button>
						</div>
					</li>
				))}
			</ul>
		);
	};
	return <div style={Wrapper}>{finishTodoList()}</div>;
};
