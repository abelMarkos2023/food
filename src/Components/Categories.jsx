import React from 'react'
import { categories } from '../data'

const Categories = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <h1 className="text-orange-500 text-4xl font-bold text-center">Menu Categories</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-4 gap-6'>
        {
            categories.map(cat => (
                <div key={cat.id} className='shadow-xl flex justify-center rounded-xl h-[250px]'>
                    <img src={cat.image} alt="" />
                    <h2 className="text-orange-400 font-bold text-4xl p-4">
                        {cat.name}
                    </h2>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Categories