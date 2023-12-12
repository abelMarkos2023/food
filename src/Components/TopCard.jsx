import React from 'react'

const TopCard = () => {
  return (
    <div className='p-4 py-12 max-w-[1640px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 '>
        {/* Card */}
        <div className='relative rounded-xl'>
        {/* Overly */}
        <div className='bg-black/50 w-full h-full text-white absolute rounded-xl p-4'>
            <p className='pt-2 font-bold text-2xl py-3'>Sun's Out Bogo's Out</p>
            <p className='py-3'>Through 8/22</p>
            <button className='mx-2 bg-white text-black absolute bottom-2 text-xl'>Order Now</button>
        </div>
        <img className='max-w-[100%] max-h-[160px] w-full md:max-h-[200px] object-cover rounded-xl' src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        {/* Card */}
        <div className='relative rounded-xl'>
        {/* Overly */}
        <div className='bg-black/50 w-full h-full text-white absolute rounded-xl p-4'>
            <p className='pt-2 font-bold text-2xl py-3'>Cooks Recomendation</p>
            <p className='py-3'>Through 8/22</p>
            <button className='mx-2 bg-white text-black absolute bottom-2 text-xl'>Added Dayly</button>
        </div>
        <img className='max-w-[100%] max-h-[160px] w-full md:max-h-[200px] object-cover rounded-xl' src="https://images.pexels.com/photos/3738755/pexels-photo-3738755.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        {/* Card */}
        <div className='relative rounded-xl'>
        {/* Overly */}
        <div className='bg-black/50 w-full h-full text-white absolute rounded-xl p-4'>
            <p className='pt-2 font-bold text-2xl py-3'>Our Special</p>
            <p className='py-3'>Through 8/22</p>
            <button className='mx-2 bg-white text-black absolute bottom-2 text-xl'>Sunday&Monday</button>
        </div>
        <img className='max-w-[100%] max-h-[160px] w-full md:max-h-[200px] object-cover rounded-xl' src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        {/* Card */}
        <div className='relative rounded-xl'>
        {/* Overly */}
        <div className='bg-black/50 w-full h-full text-white absolute rounded-xl p-4'>
            <p className='pt-2 font-bold text-2xl py-3'>Our Customer Favorites</p>
            <p className='py-3'>Through 8/22</p>
            <button className='mx-2 bg-white text-black absolute bottom-2 text-xl'>Added Dayly</button>
        </div>
        <img className='max-w-[100%] max-h-[160px] w-full md:max-h-[200px] object-cover rounded-xl' src="https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
    </div>
  )
}

export default TopCard