import React from 'react'

const Post = () => {
  return (
    <div className="text-white w-96 flex-col ml-20">
      <img
        className=" rounded-md w-full"
        src="https://cnnespanol.cnn.com/wp-content/uploads/2023/03/230302111437-space-x-full-169.jpg?quality=100&strip=info&w=300&h=170&crop=1"
        alt="Img post"
      />
      <h2 className="text-center mt-2 text-xl">Title post</h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        nostrum voluptatibus sed, explicabo doloremque esse id, sapiente dolorem
        tempore enim eaque earum sit totam fugit. Modi praesentium perspiciatis
        nemo sint.
      </p>
      <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">
        Read more..
      </button>
    </div>
  );
}

export default Post
