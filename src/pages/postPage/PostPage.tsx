import React from 'react'
import Post from '../../components/Posts/Post/Post';
import Sidebar from '../../components/Sidebar/Sidebar';
import SinglePost from '../../components/SinglePost/SinglePost';

const PostPage = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-5 mt-10">
        <div className="col-span-3 ">
          <SinglePost />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default PostPage
