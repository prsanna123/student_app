import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState=(props)=>{
    const us=[]
    const [info,setInfo]=useState(us);
    console.log("NoteState")
    const host = "http://localhost:5000"
    const getdetails=async()=>{
        const response=await fetch(`${host}/api/auth/fetchdetails`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'auth-token':localStorage.getItem('token')
            }
        });
        const json=await response.json()
        // console.log(json);
        console.log("beforeinfo")
        setInfo(json);
        console.log("atinfo")
        console.log(info);
    }
    return (
        <NoteContext.Provider value={{info,getdetails}}>
        {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;