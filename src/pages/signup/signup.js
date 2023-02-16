import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';
import './Signup.css'

export default function Signup() {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [displayName, setDisplayName]=useState('')
    const [thumbnail, setThumbnail]=useState(null)
    const [error, setError]=useState(null)
    const {signup,isPending,signuperror}=useSignup()
    const handleSubmit=(e)=>{
        e.preventDefault()
        signup(email,password,displayName,thumbnail)
        
        
    }
    function handleFileChange(e) {
        setThumbnail(null)
        const file = e.target.files[0];
        if(!file){
            setError('Please select a file')
            return
        }
        if(file.size>1024*1024*2){
            setError('File size is too large')
            return
        }
        setError(null)
        setThumbnail(file)
    }
    return (
        <form className="auth-form" onSubmit={handleSubmit} >
        <h2>Signup</h2>
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
        <label htmlFor="displayName">Display Name</label>
        <input type="text" 
            value={displayName}
            onChange={(e)=>setDisplayName(e.target.value)}
        />
        <label htmlFor="thumbnail">Thumbnail</label>
        {error && <p className='error'>{error}</p>}
        <input type="file"
            accept="image/*"
            onChange={handleFileChange}

        />
        {!isPending&&<button className='signup-btn'>Signup</button>}
        {isPending&&<button className='signup-btn' disabled>loading</button>}
        {signuperror && <p className='error'>{signuperror}</p>}
        </form>
    );
}
