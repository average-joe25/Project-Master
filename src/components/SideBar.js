import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '../assets/dashboard_icon.svg';
import AddIcon from '../assets/add_icon.svg';
import Avatar from './Avatar';
import { useAuthContext } from '../hooks/useAuthContext';
export default function SideBar() {
    const {user} = useAuthContext();
    return (
        <div className='sidebar'>
            <div className='sidebar-component'>
                <div className='user'>
                    <Avatar url={user.photoURL}/>
                    <p style={{margin:0}}>{user.displayName}</p>
                </div>
                <div className='links'>
                    <ul>
                        <li><NavLink to='/' activeclassname='active'>
                            <img src={DashboardIcon} alt="dashboard icon"/>
                            <p>Dashboard</p>
                            </NavLink>
                        </li>
                        <li><NavLink to='/create' activeclassname='active'>
                            <img src={AddIcon} alt="add icon"/>
                            <p>Create Project</p>
                            </NavLink>  
                        </li>
                    </ul>
                </div>
            </div>
         
        </div>
    );

}
