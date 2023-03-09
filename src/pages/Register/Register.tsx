import axios from 'axios';
import React, { useRef, useState } from 'react'

const Register = () => {

  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>  {
    e.preventDefault();
    const username = usernameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    
    const data = {
      username,
      email,
      password
    }
    console.log(data)
    try {
      const res = await axios.post('http://localhost:3001/api/auth/register', {
      username,
      email,
      password
    })
    console.log(res)
    } catch (error) {
      console.log(error)
    }

    

  }


  return (
    <div>
      <img src="https://images6.alphacoders.com/373/373654.jpg" alt='img register' className='absolute w-[1900px] h-[1000px]' />
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-yellow-500 underline">
            Register
          </h1>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-2">
              <label
                htmlFor="username"
                className="block text-sm font-semibold text-gray-800"
              >
                Username
              </label>
              <input
              ref={usernameRef}
                name="username"
                type="usernamel"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                ref={emailRef}
                name="email"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                ref={passwordRef}
                name="password"
                type="password"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <a href="#" className="text-xs text-yellow-600 hover:underline">
              Forget Password?
            </a>
            <div className="mt-6">
              <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register
