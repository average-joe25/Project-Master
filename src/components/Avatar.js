import './Avatar.css'
import {useAuthContext} from '../hooks/useAuthContext'
export default function Avatar(){
    const {user}=useAuthContext()
    return(
        <div className='avatar'>
            <img src={user.photoURL} alt="avatar"/>
        </div>
    );
}