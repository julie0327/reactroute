import React, { Component } from 'react'
import { Link, Route,Routes } from 'react-router-dom'
import Detail from './Detail'
  
export default class Message extends Component {
  state = {
    messageArr: [
      { id: '001', title: 'message1' },
      { id: '002', title: 'message2' },
      { id: '003', title: 'message3' }
    ]
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.messageArr.map((mesObj) => {
            return (
              <li key={mesObj.id}>
                {/* 向路由组件传递params参数 */}
                <Link to={`detail/${mesObj.id}/${mesObj.title}`}>{mesObj.title}</Link>
              </li>
            )
           })}
        </ul>
        <hr></hr>
        {/*声明接收params参数*/}
        <Routes>
        <Route path='detail/:id/:title' element={<Detail/>} />
        </Routes>
        
      </div>
    )
  }
}
