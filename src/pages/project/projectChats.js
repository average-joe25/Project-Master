import './projectchats.css'
import "react-chat-elements/dist/main.css"
import { MessageBox } from "react-chat-elements";
import { Button } from 'react-chat-elements';
import { useState } from 'react';
import { useChats } from '../../hooks/useChats';
import { timestamp } from '../../firebase/config';
import { useAuthContext } from '../../hooks/useAuthContext'
export default function ProjectChats({project}){
    const {user}=useAuthContext();
    const [message,setMessage]=useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted");
        const msg=e.target[0].value;
        console.log(msg);
        setMessage("");
        const formatmsg={
            "text":msg,
            "date":timestamp.fromDate(new Date()),
            "sender":user.displayName
        }
        const useChats(project.id)


    }
    return (<div className="project-chats">
        <h4 style={{paddingBottom:"20px",marginBottom:"20px"}}>Chats</h4>
        <div className="chats">
        <MessageBox
            position='left'
            title='Burhan'
            type='text'
            text="Hi theredfgbnjkaljnbfgnjklkjnfbgfndmksasdnbfgfdnm !"
            date={new Date()}
            replyButton={true}
        />
        </div>
        <form className="chat-input" onSubmit={handleSubmit}>
        <input type="text"placeholder='Type Here...' value={message} onChange={(e)=>setMessage(e.value)}/>
        <Button text={"Send"} title="Send" />
        </form>
    </div>);
}