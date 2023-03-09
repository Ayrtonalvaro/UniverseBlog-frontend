import React from "react";
import { PostModel } from "../../models/PostModel";

const SinglePost = ({post} : {post: PostModel | undefined}) => {
  console.log(post)
  return (
    <div >
      <h2 className="text-slate-100 text-center text-5xl">{post?.title}</h2>
      <div className="text-white flex-col ml-20">
        <img
          className="object-fill h-96 w-full"
          src={post?.photo}
          alt="Img post"
        />
        <div className="mt-5">
          <div className="flex justify-between">
            <h4 className="text-slate-400">Authoer: {post?.username}</h4>
            <div className="flex gap-5">
              <i className="text-green-600 fa-solid fa-pen-to-square"></i>
              <i className="text-red-600 fa-solid fa-trash"></i>
            </div>
          </div>
          <p className="mt-10 pl-5 text-center">
            {post?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
