
import Avatar from '../../components/Avatar';
export default function ProjectSummary({project}){
    return(
        <div className="project-summary">
        <h1 className="page-title">{project.name}</h1>
        <p className="due-date">
            Project due by {project.dueDate.toDate().toDateString()}
        </p>
        <p className="details">
            {project.details}
        </p>
        <h4>Assigned to:</h4>
        {project.assignedUsersList.map((user)=>
            <div key={user.id} className='assigned-user'>
                <span>{user.displayName}</span>
            </div>
        )}
        </div>
    );
}