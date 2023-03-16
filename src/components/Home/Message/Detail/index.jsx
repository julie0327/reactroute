import React from 'react'
import { useParams } from 'react-router-dom';

const Detail=()=> {
    const params = useParams()
    const { id, title ,content} = params
     
    return (
    <ul>
            <li>ID:{id}</li>    
            <li>TITLE:{title} </li>  
            <li>CONTENT:{content}</li>  
    </ul>
    )
  }
export default Detail;

