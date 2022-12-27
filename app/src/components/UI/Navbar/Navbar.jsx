import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton'

function Navbar() {
	const {isAuth, setIsAuth} = useContext(AuthContext);
	return (
		<div className='navbar'>
				<MyButton
					onClick={() => setIsAuth(false)}
				>
				Logout
				</MyButton>
				<div className='navbar__links'>
					<Link to="/about">About</Link>	
					<Link to="/posts">Posts</Link>
				</div>
		</div>
	)
}

export default Navbar