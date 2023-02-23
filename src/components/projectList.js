import { Link } from 'react-router-dom';
import './projectList.css';
import Avatar from './Avatar';
export default function ProjectList({projects}) {
    return (
        <div className='project-list'>
            {projects.length===0 && <p>No projects yet!</p>}
            {projects.map(project => (
                <Link key={project.id} to={'/projects/'+project.id}>
                    <h4>{project.name}</h4>
                    <p>due by {project.dueDate.toDate().toDateString()}</p>
                    <div className='assigned-to'>
                        <ul>
                            {project.assignedUsersList.map(user => (
                                <li key={user.photoURL}><Avatar url={user.photoURL}/><p>{user.displayName}</p></li>
                            ))}
                        </ul>
                    </div>
                </Link>

            ))}
        </div>
    );
}