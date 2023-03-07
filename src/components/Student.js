import React,{useContext,useEffect,useState} from 'react'
import noteContext from "../context/notes/noteContext"
import {Link} from "react-router-dom"
import "./style.css";
export default function Student(userData) {
    const [data,setData]=useState([]);
    useEffect(()=>{
      fetch("http://localhost:5000/api/auth/fetchdetails",{
        method:"GET",
      })
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data);
        setData(data.dat);
      });
    },[]);
    return (
      <div>
        <div className="container">
            
              <div className="col-6">
      {data.map(i=>{
        return(
          <div className="row">
          <div className="card">
       <i className="fa fa-user-o fa-10x mt-2" aria-hidden="true" ></i>
      <div className="card-body">
        <h5 className="card-title">Student Detail</h5>
        <p className="card-text">{i.name}</p>
        <p className="card-text">{i.class}</p>
        <p className="card-text">{i.section}</p>
        <p className="card-text">{i.branch}</p>
      </div>
    </div>
    </div>
        )
      })}
      
      </div>
    </div>
    </div>
  )
}





  
// }
// export const Student=()=>{
//   const context=useContext(noteContext);
//   const {info,getdetails}=context;
//   useEffect(()=>{
//     if(localStorage.getItem('token')){
//       getdetails()
//     }
//   },[])
//   let name;
//   let clas;
//   let branch;
//   let section;
//   console.log(info);
//   {info.map((note)=>{
//     name=note.name;
//     clas=note.class;
//     section=note.section;
//     branch=note.branch;
//   })}
//   return(
//     <div className="card" style="width: 18rem;">
//   <img className="card-img-top" src="..." alt="Card image cap"/>
//   <div className="card-body">
//     <h5 className="card-title">Student Detail</h5>
//     <p className="card-text">{name}</p>
//     <p className="card-text">{clas}</p>
//     <p className="card-text">{section}</p>
//     <p className="card-text">{branch}</p>
//     <Link to="#" className="btn btn-primary">Go somewhere</Link>
//   </div>
// </div>
//   )
// }
// export default Student;
