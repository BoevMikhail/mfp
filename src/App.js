import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "../src/styles/App.css";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Ui/Navbar/Navbar";
import { AuthContext } from "./context";

function App() {
	const [isAuth, setIsAuth] = useState(false)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if (localStorage.getItem('isAuth')) {
			setIsAuth(true)
		}
		setIsLoading(false)
	}, [])

	return (
		<AuthContext.Provider value={{
			isAuth,
			setIsAuth,
			isLoading
		}}>
			<BrowserRouter>
				<Navbar />
				<AppRouter />
			</BrowserRouter>
		</AuthContext.Provider>

	)
}

export default App;


