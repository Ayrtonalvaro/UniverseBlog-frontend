import React from "react";

const SinglePost = () => {
  return (
    <div >
      <h2 className="text-slate-100 text-center text-5xl">Title post</h2>
      <div className="text-white flex-col ml-20">
        <img
          className="object-fill h-96 w-full"
          src="https://www.lanacion.com.ar/resizer/cAE-XJ7GEIQ8kTidsrFl91TSCdw=/1200x800/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/RMBU6ZVJUFGM7AV54MOF3KCY5U"
          alt="Img post"
        />
        <div className="mt-5">
          <div className="flex justify-between">
            <h4 className="text-slate-400">Author: Ayrton alvaro</h4>
            <div className="flex gap-5">
              <i className="text-green-600 fa-solid fa-pen-to-square"></i>
              <i className="text-red-600 fa-solid fa-trash"></i>
            </div>
          </div>
          <p className="mt-10 pl-5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            nostrum voluptatibus sed, explicabo doloremque esse id, sapiente
            dolorem tempore enim eaque earum sit totam fugit. Modi praesentium
            perspiciatis nemo sint.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
