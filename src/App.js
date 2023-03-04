import './App.css'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Dashboard from './pages/dashboard/dashboard.js'
import Login from './pages/login/login.js'
import Create from './pages/create/create.js'
import Project from './pages/project/project.js'
import Signup from './pages/signup/signup.js'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import { useAuthContext } from './hooks/useAuthContext'
import OnlineUsers from './components/OnlineUsers'
function App() {
  const {user,authIsReady} = useAuthContext()
  return (

    <div className="App">
    {authIsReady && (
      <BrowserRouter>
      {user&&<SideBar/>}
      <div className='container'>
        <Navbar/>
        
        <Routes>
          <Route path='/' element={user?<Dashboard/>:<Navigate to='/login'/>}/>
          <Route path='/login' element={!user?<Login/>:<Navigate to='/'/>}/>
          <Route path='/create' element={user?<Create/>:<Navigate to='/login'/>}/>
          <Route path='/projects/:id' element={user?<Project/>:<Navigate to='/login'/>}/>
          <Route path='/signup' element={!user?<Signup/>:<Navigate to='/'/>}/>
        </Routes>
      </div>
      {user&&<OnlineUsers/>}
      </BrowserRouter>
    )}
    </div>
  );
}

export default App
