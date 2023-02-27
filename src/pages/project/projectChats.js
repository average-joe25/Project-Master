import './projectchats.css'
import "react-chat-elements/dist/main.css"
import { MessageBox } from "react-chat-elements";
import { Button } from 'react-chat-elements';
import { useState } from 'react';
import  addChats  from '../../components/addChats';
import { timestamp } from '../../firebase/config';
import { useAuthContext } from '../../hooks/useAuthContext'
import ScrollToBottom from 'react-scroll-to-bottom';
export default function ProjectChats({project}){
    const [error,setError]=useState(null);
    const {user}=useAuthContext();
    const [message,setMessage]=useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const msg=e.target[0].value;
        setMessage("");
        const formatmsg={
            "text":msg,
            "date":timestamp.fromDate(new Date()),
            "sender":user.displayName,
            "senderid":user.uid
        }
        const chats=project.chats;
        chats.push(formatmsg);
        console.log(chats,project.id);
        const res=addChats(project.id,chats);
        if(!res){
            setError("Error Sending Message");
        }
    }
    return (<div className="project-chats">
        <h4 style={{paddingBottom:"20px",marginBottom:"20px"}}>Chats</h4>
        {!error&&<ScrollToBottom className="chats">
        {project.chats.map((chat)=>{
            return <MessageBox
                position={chat.senderid===user.uid?"right":"left"}
                title={chat.sender}
                type='text'
                text={chat.text}
                date={chat.date.toDate()}
            />
        })}
        {project.chats.length===0&&<div style={{textAlign:"center"}}>No Chats Yet</div>}
        </ScrollToBottom>}
        {!error&&<form className="chat-input" onSubmit={handleSubmit}>
        <input type="text"placeholder='Type Here...' value={message} onChange={(e)=>setMessage(e.value)}/>
        <Button text={"Send"} title="Send" />
        </form>}
        {error&&<div>{error}</div>}
    </div>);
}