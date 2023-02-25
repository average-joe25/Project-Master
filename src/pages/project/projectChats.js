import "react-chat-elements/dist/main.css"
import { MessageBox } from "react-chat-elements";
export default function ProjectChats({project}){
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
        <div className="chat-input">
        </div>
    </div>);
}