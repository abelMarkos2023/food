import React,{useState} from 'react'
import {AiOutlineMenu,AiFillTag,AiOutlineSearch,AiOutlineClose} from 'react-icons/ai'
import {BsFillCartFill,BsFillSaveFill} from 'react-icons/bs'
import {MdFavorite,MdHelp} from 'react-icons/md'
import {FaUserFriends,FaWallet} from 'react-icons/fa'
import {TbTruckDelivery} from 'react-icons/tb'
const Navbar = () => {
    const [menu,setMenu] = useState(false)
    const obj = {name:"admin",password:"123"}
    console.log(Object.keys(obj))

    const toggleMenu = () => {
        setMenu(!menu)
    }
  return (
    <div>
    <div className='max-w-[1640px] flex justify-between items-center mx-auto py-4'>
        {/* left */}
        <div className='flex items-center'>
        <div className="cursor-pointer" onClick={toggleMenu}>
            <AiOutlineMenu size={40}/>
        </div>
       
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
            Best <span className='font-bold'>Eats</span>
            </h1>
        <div className='hidden lg:flex items-center p-1 bg-gray-200 rounded-full text-[14px]'>
            <p className='bg-black p-2 rounded-full text-white'>Dilvery</p>
            <p className='p-2'>Pickup</p>
        </div>
        </div>
        {/* Input */}
        <div className='bg-gray-200 rounded-full px-2 w-200px sm:w-[400px] lg:w-[500] flex items-center'>
            <AiOutlineSearch className='cursor-pointer' size={20}/>
            <input className='flex-1 border-none p-2 bg-transparent outline-none text-[17px]' type="text" placeholder='Search In Our Menu.....' />
        </div>
        {/* Cart */}
        
            <button className="bg-black text-white rounded-full py-2 hidden md:flex gap-2 items-center cursor-pointer">
            <BsFillCartFill size={24} />
            Cart
            </button>

            
    </div>
    {/* overly */}
    <div className={`bg-black/60 w-screen h-screen z-10 ease-in-out duration-1000 top-0 left-0 ${menu == false?'hidden':'block'}`}>
                {/* Drawer */}
                <div className={`bg-white h-screen w-[300px] top-0  z-11 fixed duration-1000 ease-in-out ${menu== false?'left-[-100%]':'left-0'}`}>
                    <AiOutlineClose onClick={toggleMenu} size={30} className='cursor-pointer absolute right-4 top-4'/>
                    <h1 className="p-4 text-[20px]">Best <span className='font-bold'>Eats</span></h1>
                    <nav>
                        <ul className='p-4 flex gap-5 flex-col text-gray-800 duration'>
                            <li className='flex px-4 items-center text-xl gap-3'>
                                <TbTruckDelivery size={30}/> Orders
                            </li>
                            <li className='flex px-4 items-center text-xl gap-3'>
                                <MdFavorite size={30}/> Favorites
                            </li>
                            <li className='flex px-4 items-center text-xl gap-3'>
                                <FaWallet size={30}/> Wallet
                            </li>
                            <li className='flex px-4 items-center text-xl gap-3'>
                                <AiFillTag size={30}/> Promotions
                            </li>
                            <li className='flex px-4 items-center text-xl gap-3'>
                                <MdHelp size={30}/> Help
                            </li>
                            <li className='flex px-4 items-center text-xl gap-3'>
                                <BsFillSaveFill size={30}/> Best Ones
                            </li>
                            <li className='flex px-4 items-center text-xl gap-3'>
                                <FaUserFriends size={30}/> Invite Friends
                            </li>
                           
                        </ul>
                    </nav>
                </div>
            </div>
    </div>
  )
}

export default Navbar