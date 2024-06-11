import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from '../components/pages/product'
import Home from '../components/pages/home'
import About from '../components/pages/about'
import Page from '../components/pages/page'
import Blog from '../components/pages/blog'
import Contact from '../components/pages/contact'
import Login from '../components/pages/login'

function Routing() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/page' element={<Page/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default Routing