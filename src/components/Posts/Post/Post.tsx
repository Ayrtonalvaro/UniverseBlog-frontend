import { Link } from "react-router-dom";
import { PostModel } from "../../../models/PostModel";

const Post = ({post} : {post: PostModel}) => {
  console.log(post._id)
  const date = new Date(post.createdAt).toDateString()
  return (
    <div className="text-white w-96 flex-col ml-20">
      <img
        className=" rounded-md w-full"
        src={post.photo}
        alt="Img post"
      />
      <h2 className="text-center mt-2 text-xl">{post.title}</h2>
      <p className="text-center">
        {post.description}
      </p>
      <div className="flex justify-between">
        <span className="text-yellow-400">Author: {post.username}</span>
        <span className="text-green-400 ml-2">Date: {date}</span>
      </div>
      <Link to={`/post/${post._id}`}>
        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">
        Read more..
      </button>
      </Link>
      
    </div>
  );
}

export default Post
