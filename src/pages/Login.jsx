import React, { useContext, useState } from 'react';
import './login.css';
import { TodoContext } from '../context/AppContext';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
const User = {
	email: 'ajeet@gmail.com',
	password: 'Ajeet@123',
};

export const Login = () => {
	const { setUsername } = useContext(TodoContext);
	const [errorMessage, setErrorMessage] = useState('');
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		clearErrors,
		setFocus,
	} = useForm();

	const onSubmit = (data) => {
		const { email, password } = data;

		if (email !== User.email || password !== User.password) {
			setErrorMessage('Invalid Credentials');
			setError('email', {
				type: 'manual',
				message: 'Invalid email or password',
			});
			setFocus('email');
		} else {
			const username = email.split('@')[0];
			setUsername(username);
			localStorage.setItem('username', username);
			clearErrors();
			navigate('/todo-list');
		}
	};

	return (
		<div className='container'>
			<div className='screen'>
				<div className='screen__content'>
					<div style={{ textAlign: 'center', marginBlock: '15px' }}>
						Dummy Credentials <br />
						Email: {User.email}
						<br /> password: {User.password}
					</div>
					<form className='login' onSubmit={handleSubmit(onSubmit)}>
						<div className='login__field'>
							<input
								type='email'
								{...register('email', {
									required: 'Email is required',
									pattern: {
										value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
										message: 'Enter a valid email address',
									},
								})}
								placeholder='Email'
								className='login__input'
								autoComplete='email'
							/>
							<p className='error-message'>{errors.email?.message}</p>
						</div>
						<div className='login__field'>
							<input
								type='password'
								className='login__input'
								{...register('password', {
									required: 'Password is required',
									minLength: {
										value: 6,
										message: 'Password must be at least 6 characters',
									},
								})}
								placeholder='Password'
								autoComplete='current-password'
							/>
							<p className='error-message'>{errors.password?.message}</p>
						</div>
						<button className='button login__submit'>
							<span className='button__text'>Log In Now</span>
							<i className='button__icon fas fa-chevron-right'></i>
						</button>
					</form>
				</div>
				<div className='screen__background'>
					<span className='screen__background__shape screen__background__shape4'></span>
					<span className='screen__background__shape screen__background__shape3'></span>
					<span className='screen__background__shape screen__background__shape2'></span>
					<span className='screen__background__shape screen__background__shape1'></span>
				</div>
			</div>
		</div>
	);
};
