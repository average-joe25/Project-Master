import './dashboard.css';
import {useCollection} from '../../hooks/useCollection'
import ProjectList from '../../components/projectList'
export default function Dashboard() {
    const {documents,error} = useCollection('projects');
    return (
        <div>
            <h2 className='page-title'>Dashboard</h2>
            {error && <div className='error'>{error}</div>}
            {documents && <ProjectList projects={documents}/>}
        </div>

        
    );
}