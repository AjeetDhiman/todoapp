import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { TodoContext } from '../context/AppContext';

const ProtectedRoute = ({ children }) => {
	const { username } = useContext(TodoContext);

	const isAuthenticated = localStorage.getItem('username') !== null;

	if (!username && !isAuthenticated) {
		return <Navigate to='/' />;
	}

	return children;
};

export default ProtectedRoute;
