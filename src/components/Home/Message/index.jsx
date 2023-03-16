import React, { useState } from 'react'
import { Link, Route,Routes,useNavigate } from 'react-router-dom'
import Detail from './Detail'

export default function Message() {
  const navigate=useNavigate()//只能用在function中
   const [messageArr]= useState([
      { id: '001', title: 'message1',content:'sunny' },
      { id: '002', title: 'message2',content:'rainy' },
      { id: '003', title: 'message3',content:'cloudy' }
  ])
  return (
    <div>
      <ul>
        {messageArr.map((mesObj) => {
          return (
            <li key={mesObj.id}>
              {/* 向路由组件传递params参数 */}
              <Link to={`detail/${mesObj.id}/${mesObj.title}/${mesObj.content}`}>{mesObj.title}</Link>
              {/*编程式路由导航：按后退按钮会留下查看痕迹，有历史记录*/}
              <button onClick={() => navigate(`detail/${mesObj.id}/${mesObj.title}`)}>push</button>
              {/*编程式路由导航： 按后退按钮不会留下查看痕迹，没有历史记录*/}
              <button onClick={() => navigate(`detail/${mesObj.id}/${mesObj.title}`, { replace: true })}>replace</button>
            </li>
          )
        })
        }
      </ul>
      <hr></hr>
      {/*声明接收params参数*/}
      <Routes>
        <Route path='detail/:id/:title/:content' element={<Detail />} />
      </Routes>
      {/*按back后退一步*/}
      <button onClick={() => { navigate(-1) }}>back</button>
      {/*按forward前进一步*/}
      <button onClick={() => { navigate(1) }}> forward</button>
      {/*按go前进两步*/}
      <button onClick={()=>{navigate(2)}}>go</button>
    </div>
  )
}
