import './project.css'
import { useParams } from 'react-router-dom';
import useDocument from '../../hooks/useDocument';
export default function Project() {
    const {id}=useParams();
    const {document,error}=useDocument('projects',id);
    return (
        <div className="project">
        {error && <div>{error}</div>}
        {(document)?(<div className='project-details'>
            <h1>{document.name}</h1>
            
        </div>):(!error&&<div>Loading</div>)}
        </div>
    );
}