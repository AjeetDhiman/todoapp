import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { TodoList } from './pages/TodoList';
import TodoContextProvider from './context/TodoContextProvider';
import ProtectedRoute from './context/ProtectedRoute';

export const App = () => {
	return (
		<TodoContextProvider>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route
					path='/todo-list'
					element={
						<ProtectedRoute>
							<TodoList />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</TodoContextProvider>
	);
};
