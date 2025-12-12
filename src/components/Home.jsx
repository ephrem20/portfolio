import React from 'react'
import homepic from "../assets/homepic.jpg";

const Home = () => {
  return (
    <div className=' text-black dark:bg-black dark:text-white text-center py-16'>
        <div className="flex justify-center">
          <div className="w-50 h-50 rounded-full bg-white dark:bg-black p-2 shadow-lg flex items-center justify-center overflow-hidden">
        <img src={homepic} alt="" 
        className='w-48 h-48 object-COVER rounded-full'/>
          </div>
        </div>
        <h1 className='text-4xl font-bold  bg-white text-black dark:bg-black dark:text-white'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Bereket</span>
            , Frontend Developer and Graphic Designer 
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            I specialize in building modern and responsive web applications and creating engagning designes.
        </p>
        <div className='mt-8 space-x-4'>
            <button
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
            onClick={() => window.location.href = '#contact'}>
            Contact</button>
            <button
  className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
  transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
  onClick={() => window.open(BereketMengesha, '_blank')}
>
  Resume
</button>
        </div>
    </div>
  )
}

export default Home
