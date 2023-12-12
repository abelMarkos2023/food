import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 '>
        <div className='max-h-[500px]  relative'>
            {/* Overlay */}
            <div className='text-gray-200 h-full top-0 w-full absolute bg-black/40 flex flex-col justify-center max-h-[500px]'>
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text:7xl font-bold p-4 '>The <span className='text-orange-500'>Best</span></h1>
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text:7xl font-bold p-4'>
                <span className='text-orange-500'>Food</span> Delivered</h1>
            </div>
            <img className='object-cover max-h-[500px] w-full' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
    </div>
  )
}

export default Hero