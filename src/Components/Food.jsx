import React,{useState} from 'react'
import { data } from '../data'

const Food = () => {
    const [food,setFood] = useState(data)

    const filterFood = type => {
        if(type === 'all'){
            setFood(data)
            return
        }
        setFood(data.filter(item => item.category === type))
    }

    const filterPrice = price => {
        setFood(data.filter(item => item.price.length == price.length))
    }
  return (
    <div className='max-w-[1640px] mx-auto py-12'>
        <h1 className='text-orange-500 text-4xl text-center font-bold'>Top Rated Food</h1>
        {/* filter */}
        <div className='flex flex-col md:flex-row justify-between'>
            {/* Filter Tyoe */}
            <div>
            <p className='font-bold text-2xl text-gray-700'>Filter Type</p>
            <div className='flex flex-wrap justify-between p-4'>
                <button onClick = {() => filterFood('all')} className='text-orange-600 m-1 border-orange-600 hover:bg-orange-600 hover:text-white py-2 font-bold'>All</button>
                <button onClick = {() => filterFood('burger')} className='text-orange-600 m-1 border-orange-600 hover:bg-orange-600 hover:text-white py-2 font-bold'>Burger</button>
                <button onClick = {() => filterFood('pizza')} className='text-orange-600 m-1 border-orange-600 hover:bg-orange-600 hover:text-white py-2 font-bold'>Pizza</button>
                <button onClick = {() => filterFood('salad')} className='text-orange-600 m-1 border-orange-600 hover:bg-orange-600 hover:text-white py-2 font-bold'>Salad</button>
                <button onClick = {() => filterFood('chicken')} className='text-orange-600 m-1 border-orange-600 hover:bg-orange-600 hover:text-white py-2 font-bold'>Chicken</button>
            </div>
            </div>
            {/* Filter Price */}
            <div>
                <p className='font-bold text-2xl text-gray-700'>Filter Price</p>
                <div className='flex flex-wrap justify-between p-4'>
                    <button onClick = {() => filterPrice('$')} className='text-orange-600 m-1 border-orange-600 hover:bg-orange-600 hover:text-white py-2 font-bold'>$</button>
                    <button onClick = {() => filterPrice('$$')} className='text-orange-600 m-1 border-orange-600 hover:bg-orange-600 hover:text-white py-2 font-bold'>$$</button>
                    <button onClick = {() => filterPrice('$$$')} className='text-orange-600 m-1 border-orange-600 hover:bg-orange-600 hover:text-white py-2 font-bold'>$$$</button>
                    <button onClick = {() => filterPrice('$$$$')} className='text-orange-600 m-1 border-orange-600 hover:bg-orange-600 hover:text-white py-2 font-bold'>$$$$</button>
                </div>
            </div>
        </div>
        {/* Disply Food */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {
                food.map(item=>(
                    <div key={item.id} className='rounded-xl duration-500 shadow-2xl cursor-pointer hover:scale-105 ease-in-out'>
                        <img className='w-[100%] max-h-[300px] object-cover rounded-t-xl' src={item.image} alt="" />
                        <div className='flex justify-between px-4 py-2'>
                            <p className='font-bold'>{item.name}</p>
                            <p className='text-xl text-center'>{item.category}</p>
                            <p className='text-orange-500 font-bold text-3xl'>{item.price}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Food