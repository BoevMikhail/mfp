import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from '../../../context';

const Navbar = () => {
	const {isAuth, setIsAuth} = useContext(AuthContext);
  return (
    <div className="navbar">
    <div className="navbar__links">
			{isAuth &&
				<button style={{display: 'block', marginRight: 'auto'}} onClick={() => setIsAuth(false)}>Выйти</button>
			}
      <Link className="navbar__item" to="/about">О сайте</Link>
      <Link className="navbar__item" to="/posts">Посты</Link>
    </div>
  </div>
  )
}

export default Navbar
