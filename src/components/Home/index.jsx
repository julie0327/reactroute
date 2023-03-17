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
        <nav id='style-inside'>
          <NavLink to='news' children='news' className='style-inside'>NEWS</NavLink>
          <NavLink to='message' children='message' className='style-inside'>MESSAGE</NavLink>
        </nav>
          <Routes>
            <Route path='news/*' element={<News/> } />
            <Route path='message/*' element={<Message/> } />
          </Routes>
        </div>
      </div>      
    )
  }
}
