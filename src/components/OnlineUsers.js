import './OnlineUsers.css'
import {useCollection} from '../hooks/useCollection'
import Avatar from './Avatar';
export default function(){
    const {error,documents} = useCollection('users');
    return(
        <div className='user-list'>
            <h2>All User</h2>
            {error && <div className='error'>{error}</div>}
            {documents && documents.map(user =>(
                <div  className='user-list-item' key={user.id}>
                    <Avatar url={user.photoURL}/>
                    <p>{user.displayName}</p>
                </div>
            ))}
        </div>
    );
}