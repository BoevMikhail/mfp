import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "../src/styles/App.css";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Ui/Navbar/Navbar";
import { AuthContext } from "./context";

function App() {
	const [isAuth, setIsAuth] = useState(false)
  return (
    <AuthContext.Provider value= {{
			isAuth,
			setIsAuth
		}}>
			<BrowserRouter>
				<Navbar />
				<AppRouter />
			</BrowserRouter>
		</AuthContext.Provider>

  )
}

export default App;


