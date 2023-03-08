import React from "react";

const NewPost = () => {
  return (
    <div>
      <h1 className=" text-center text-3xl text-yellow-400">New post</h1>
      <form>
        <div className="flex gap-2 justify-center">
          <label htmlFor="fileInput">
            <i className="text-white bg-green-600 w-8 h-8 flex justify-center items-center rounded-full text-xl fa-sharp fa-solid fa-plus"></i>
          </label>
          <input
            className="text-white"
            type="file"
            id="fileInput"
            style={{ display: "none" }}
          />
          <input
            className="bg-gray-50 w-[800px] border border-gray-300 text-gray-900 text-sm rounded-md px-2 outline-none"
            type="text"
            placeholder="Title post..."
            autoFocus={true}
          />
        </div>
        <div className="flex   justify-center mt-5">
          <textarea
            className="bg-gray-50 ml-10 w-[800px] resize-y h-96  border text-start border-gray-300 text-gray-900 text-sm rounded-md px-2 outline-none"
            typeof="text"
          ></textarea>
        </div>
        <div className="flex justify-center mt-5">
          <button className="text-white bg-green-600 w-[300px] text-2xl rounded-md ">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
