import React, { useContext } from 'react'
import MyButton from '../components/Ui/button/MyButton'
import MyInput from '../components/Ui/input/MyInput'
import { AuthContext } from '../context'

const Login = () => {
	const {setIsAuth} = useContext(AuthContext);
	const login = (e) => {
		e.preventDefault();
		setIsAuth(true);
		localStorage.setItem('isAuth', 'true')
	}
    return (
        <div>
            <h1>Страница логина</h1>
            <form onSubmit={login}>
                <MyInput placeholder="Введите логин" />
                <MyInput type="password" placeholder="Введите пароль" />
                <MyButton>Войти</MyButton>
            </form>
        </div>
    )
}

export default Login
