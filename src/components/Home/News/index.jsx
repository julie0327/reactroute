import React, { Component } from 'react'
import {NavLink,Route,Routes} from 'react-router-dom'
import NewsItem from './NewsItem';

export default class News extends Component {
  render() {
    return (
      <div>
        <div>
        <ul>
            <li>
                {/* <a href='/news1'>News001</a> */}
                <NavLink to='news/1'>News001</NavLink>
            </li>   
            <li>
                {/* <a href='/news2'>News002</a> */}
                <NavLink to='news/2'>News002</NavLink>
            </li>  
            <li>
                {/* <a href='/news3'>News003</a> */}
                <NavLink to='news/3'>News003</NavLink>
            </li>  
        </ul>
        <Routes>
          <Route path='news/:id' element={<NewsItem/> } />
        </Routes>
      </div>
      </div>
    )
  }
}