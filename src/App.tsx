import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import PostPage from './pages/postPage/PostPage'
import Footer from './components/Footer/Footer'
import NewPost from './pages/NewPost/NewPost'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from './components/Posts/Post/Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-black w-full h-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/postPage" element={<PostPage/>} />
          <Route path="/newPost" element={<NewPost />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
