import React, { useEffect, useState } from 'react'
import Post from '../../components/Posts/Post/Post';
import Sidebar from '../../components/Sidebar/Sidebar';
import SinglePost from '../../components/SinglePost/SinglePost';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { PostModel } from '../../models/PostModel';

const PostPage = () => {
  const singlePostId = useParams<{ id: string }>();
  console.log(singlePostId)
  const [postData, setPostData] = useState<PostModel>()
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/posts/${singlePostId.id}`)
        console.log(res.data)
        setPostData(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPost()
  },[])

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 mt-10">
        <div className="col-span-3 ">
          <SinglePost post = {postData}/>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default PostPage
