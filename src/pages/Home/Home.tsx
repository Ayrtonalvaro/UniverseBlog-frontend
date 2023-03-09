import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Posts from '../../components/Posts/Posts'
import Sidebar from '../../components/Sidebar/Sidebar'

const Home = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/posts")
        console.log(res.data)
        setPosts(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPosts()
  },[])

  return (
    <>
      <Header />
      <div className="grid grid-cols-4 mt-10">
        <div className="col-span-3">
          <Posts posts={posts}/>
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default Home
