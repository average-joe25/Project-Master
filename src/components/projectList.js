import { Link } from 'react-router-dom';
import './projectList.css';
import Avatar from './Avatar';
import { useAuthContext } from '../hooks/useAuthContext';
import 'font-awesome/css/font-awesome.min.css';
import { useFirestore } from '../hooks/useFirestore';
import { faHouseMedicalCircleExclamation } from '@fortawesome/free-solid-svg-icons';
export default function ProjectList({projects}) {
    const {deleteDocument}=useFirestore('projects');
    const {user}=useAuthContext();
    const handleDelete = (e) => {
        e.preventDefault();
        deleteDocument(e.target.id);

    }
    return (
        <div className='project-list'>
            {projects.length===0 && <p>No projects yet!</p>}
            {projects.filter(((project)=>{
                return (project.assignedUsersList.find((assigned) => {return assigned.id === user.uid})||project.createdBy.id===user.uid); 
            })).map(project => (
                <Link key={project.id} to={'/projects/'+project.id}>
                    <div className='name-trash'><h4>{project.name}</h4>
                    <i id={project.id} class="fa fa-trash" aria-hidden="true" onClick={handleDelete}></i></div>
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
