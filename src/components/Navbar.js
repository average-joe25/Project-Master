import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import {useLogout} from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
export default function Navbar() {
    const {user,authIsReady}=useAuthContext()
    const {logout,isPending}=useLogout()
    return (
        <div className="navbar">
            <ul>
                <li className='logo'><a href='/'><img src={logo} alt="logo"/></a></li>
                {!user&&<li><Link to='/login' activeClassName='active'>Login</Link></li>}
                {!user&&<li><Link to='/signup' activeClassName='active'>Signup</Link></li>}
                {user&&!isPending&&<li><btn className='btn' onClick={logout}>Logout</btn ></li>}
                {isPending&&<li><btn className='btn' disabled>Logging out</btn ></li>}
             </ul>
        </div>
    )
}