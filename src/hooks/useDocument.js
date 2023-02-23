import { useEffect,useState } from "react";
import { db } from "../firebase/config";

export default function useDocument(collection,id) {
    const [document,setDocument] = useState(null);
    const [error,setError] = useState(null);
    //realtime data 
    useEffect(() => {
        const ref=db.collection(collection).doc(id);
        const unsubcribe=ref.onSnapshot((Snapshot)=>{
            if(Snapshot.exists){
                setDocument({...Snapshot.data(),id:Snapshot.id});
                setError(null);
            }else{
                setError('Document does not exist');
            }
        })
        return () => unsubcribe();
    }, [collection,id]);
    return {document,error};
}