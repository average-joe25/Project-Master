import './Login.css';
import { useState } from 'react';
import {useLogin} from '../../hooks/useLogin';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, isPending, error} = useLogin();
    const handleSubmit=(e)=>{
        e.preventDefault();
        login(email, password);
    }
    return (
        <form className="auth-form" onSubmit={handleSubmit} >
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input type="email" 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}
            />
        <label htmlFor="password">Password</label>
        <input type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
        />
        
        {!isPending&&<button className='signup-btn'>Login</button>}
        {isPending&&<button className='signup-btn' disabled>loading</button>}
        {error && <p className='error'>{error}</p>}
        </form>
    );
}