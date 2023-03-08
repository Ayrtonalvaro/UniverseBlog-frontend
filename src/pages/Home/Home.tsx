import React from 'react'
import Header from '../../components/Header/Header'
import Posts from '../../components/Posts/Posts'
import Sidebar from '../../components/Sidebar/Sidebar'

const Home = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-4 mt-10">
        <div className="col-span-3">
          <Posts />
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default Home
