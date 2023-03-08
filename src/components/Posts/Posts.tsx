import React from 'react'
import Post from './Post/Post'

const Posts = () => {
  return (
    <>
      <div className='grid grid-cols-2 gap-5 items-center justify-center '>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
}

export default Posts
