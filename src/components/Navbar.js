import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import {useLogout} from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
export default function Navbar() {
    const {user,authIsReady}=useAuthContext()
    const {logout,isPending,error}=useLogout()
    return (
        <div className="navbar">
            <ul>
                <li className='logo'><a href='/'><img src={logo} alt="logo"/></a></li>
                {!user&&<li><Link to='/login' activeclassname='active'>Login</Link></li>}
                {!user&&<li><Link to='/signup' activeclassname='active'>Signup</Link></li>}
                {user&&!isPending&&<li><button className='btn' onClick={logout}>Logout</button ></li>}
                {user&&isPending&&<li><button className='btn' disabled>Logging out</button ></li>}
             </ul>
        </div>
    )
}