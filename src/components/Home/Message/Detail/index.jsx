import React, { Component } from 'react'
import { useParams } from 'react-router-dom';

export default function Detail () {
    const detailData =[
        { id: '01', content: 'sunny' },
        { id: '02', content: 'cloudy' },
        { id: '03', content: 'foggy' }
    ] 
    const params = useParams()
    const { id, title } = params
    // const data=detailData.filter(i=>i.id===id)[0]    
    return (
    <ul>
            <li>ID:{id}</li>    
            <li>TITLE:{title} </li>  
            <li>CONTENT:content</li>  
    </ul>
    )
  }

