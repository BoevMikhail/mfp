import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from '../context';
import { privateRoutes, publicRoutes } from './routes';
import Loader from './Ui/Loader/Loader';

const AppRouter = () => {
	const {isAuth, isLoading} = useContext(AuthContext);

	if(isLoading) {
		return <Loader />
	}

	return (
		isAuth
			? <Routes>
				{privateRoutes.map(route => <Route path={route.path} element={<route.element />} />)}
				<Route
					path="*"
					element={<Navigate to="/posts" replace />}
				/>
			</Routes>
			: <Routes>
				{publicRoutes.map(route => <Route path={route.path} element={<route.element />} />)}
				<Route
					path="*"
					element={<Navigate to="/login" replace />}
				/>
			</Routes>)

}

export default AppRouter
