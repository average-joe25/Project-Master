import './project.css'
import { useParams } from 'react-router-dom';
import ProjectSummary from './projectSummary';
import useDocument from '../../hooks/useDocument';
import ProjectChats from './projectChats';
export default function Project() {
    const {id}=useParams();
    const {document,error}=useDocument('projects',id);
    return (
        <div className="project">
        {(document)?(<ProjectSummary project={document}/>):(!error&&<div>Loading</div>)}
        {(document)&&<ProjectChats project={document}/>}
        {error && <div>{error}</div>}
        </div>
    );
}