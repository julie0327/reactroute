import React from 'react'
import {NavLink,BrowserRouter ,Route,Routes,Navigate } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Test from './components/Test'

export default function App() {
  return (
    <div>
      <h2>React Router Home</h2>
        {/* 原声html中靠<a>跳转不同的页面 */}
            {/* <a href='./about.html'>About</a>
            <a href='./home.html'>Home</a> */}
        {/* React中靠路由链接实现切换组件--编写路由链接 */}
      <BrowserRouter>
        <nav id='style'>
        <NavLink to='/about' className='style'>About</NavLink>
        <NavLink to='/home' className='style'>Home</NavLink> 
        </nav>
        {/* 注册路由 */}
        <Routes>
          <Route path='/about' element={<About/>} />
          <Route path='/home/*' element={<Home />} />{/*模糊匹配*/}
          {/* <Route path='/home' element={<Test />} />不被运行，单一匹配 */}
          <Route path='*' element={<Navigate to='/about' />} />{/*找不到任何匹配路径的话就去about*/}
        </Routes> 
      </BrowserRouter> 
    </div>
  )
}
