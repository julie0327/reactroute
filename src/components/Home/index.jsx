import React, { Component } from 'react'
import {NavLink,Route,Routes} from 'react-router-dom'
import News from './News'
import Message from './Message'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>Content about HOME!!!</h3>
        <div>
          <ul >
            <li className='style-inside'>
              <NavLink to='news' children='news'>NEWS</NavLink>
            </li>
            <li className='style-inside'>
              <NavLink to='message' children='message'>MESSAGE</NavLink>
            </li>
          </ul>
          <Routes>
            <Route path='news/*' element={<News/> } />
            <Route path='message' element={<Message/> } />
          </Routes>
        </div>
      </div>      
    )
  }
}
