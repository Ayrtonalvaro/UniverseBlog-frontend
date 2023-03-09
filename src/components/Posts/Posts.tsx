import React from 'react'
import { PostModel } from '../../models/PostModel';
import Post from './Post/Post'

const Posts = ({posts} : {posts:PostModel[]}) => {
  return (
    <>
      <div className='grid grid-cols-2 gap-5 items-center justify-center '>
        {posts.map((post:PostModel) => {
          return <Post post = {post} />
        })}
      </div>
    </>
  );
}

export default Posts
