import { db } from "../firebase/config"

export default function addChats (projectid,chats){
    var ref = db.collection("projects").doc(projectid);
    return ref.update({
    chats: chats
    })
    .then(() => {
    console.log("Document successfully updated!");
    })
    .catch((error) => {
    console.error("Error updating document: ", error);
});
}