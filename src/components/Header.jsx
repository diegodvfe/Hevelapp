
import React, { useState } from 'react'
import { BsFillBasketFill,  } from 'react-icons/bs'
import {MdAdd, MdLogout} from 'react-icons/md'
import { LayoutGroupContext, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Images
import Logo from '../img/logo.png'
import Avatar from '../img/avatar.png'

// Authentication form with google
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'

export const Header = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

// Nuestro propio hook
 const [{user}, dispatch] = useStateValue()

const [isMenu, setisMenu] = useState(false)

  const login = async () =>{
    if (!user){
       const {user: {refreshToken, providerData }} = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      })
      localStorage.setItem('user', JSON.stringify(providerData[0]));

    }else {
      setisMenu(!isMenu)
    }
  }

  const logout = async () => {
    setisMenu(false)
    localStorage.clear()

    dispatch({
      type: actionType.SET_USER,
      user: null
    })
  }

  return (
    <header className='fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 '>
      {/* Desktop & tablet */}
      <div className='hidden md:flex w-full h-full items-center justify-between'>
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className='text-headingColor text-xl font-bold'>Hevel</p>
        </Link>
            {/* Menu division */}
          <div className='flex items-center gap-8'>

            <motion.ul
            initial={{opacity: 0, x:200}}
            animate={{ opacity: 1, x: 1}}
            exit={{opacity: 0, x:200}}
            className='flex items-center gap-8 '>
                <li className='text-base text-headingColor hover:text-headingColor duration-100
                transition-all ease-in-out cursor-pointer  '>About Us</li>
                <li className='text-base text-headingColor hover:text-headingColor duration-100
                transition-all ease-in-out cursor-pointer'>Menu</li>
                <li className='text-base text-headingColor hover:text-headingColor duration-100
                transition-all ease-in-out cursor-pointer'> Service</li>
                <li className='text-base text-headingColor hover:text-headingColor duration-100
                transition-all ease-in-out cursor-pointer'>Contact </li>
            </motion.ul>

            <div
                className="relative flex items-center justify-center">
                <BsFillBasketFill className=' text-textcolor  text-2xl  cursor-pointer'/>
                <div className=" absolute -top-3 -right-4 w-5 h-5 rounded-full bg-cartNumBg
                flex items-center justify-center">
                  <p className=' text-sm text-white font-bold'>2</p>
                </div>
            </div>

              {/* Integration of auth */}
            <div className='relative '>
              <motion.img
              whileTap={{scale:2}}
              src={user ? user.photoURL : Avatar}
              className="w-11 min-w-[40px] h-11 min-h-[40px] drop-shadow-lg cursor-pointer rounded-full"
              alt="userprofile"
              onClick={login}
              />

              {
                isMenu && (
                <motion.div
                initial={{opacity: 0, scale : 0.6}}
                animate={{ opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.6}}
                 className='w-40 bg-gray-50 flex flex-col shadow-xl rounded-lg absolute top-12 right-2  py-2'>
                  {user && user.email === "alv.diego19@gmail.com" && (
                  <Link to={'/createItem'}>

                    <p className='cursor-pointer px-4 py-3 flex items-center gap-3 hover:bg-slate-200 transition-all
                    duration-100 ease-out text-textColor text-base '>
                      New Item<MdAdd/>
                    </p>
                  </Link>
                  )}

                  <p className='cursor-pointer px-4 py-3 flex items-center gap-3 hover:bg-red-400 transition-all
                  duration-100 ease-out text-textColor text-base'
                  onClick={logout}
                  >Logout <MdLogout/></p>
                </motion.div>
                )
              }
            </div>
          </div>
      </div>


      {/* Hover phone */}
      <div className='flex items-center justify-between md:hidden w-full
      h-full '>
         <motion.div whileTap={{scale:1.4}}
            className="relative flex items-center justify-between">
            <BsFillBasketFill className=' text-textcolor  text-2xl  cursor-pointer'/>
            <div className=" absolute -top-3 -right-4 w-5 h-5 rounded-full bg-cartNumBg
            flex items-center justify-center">
              <p className=' text-xs text-white font-bold'>2</p>
            </div>
        </motion.div>
         <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className='text-headingColor text-xl font-bold'>Hevel</p>
          </Link>

         <div className='relative '>
          <motion.img
          whileTap={{scale:2}}
          src={user ? user.photoURL : Avatar}
          className="w-11 min-w-[40px] h-11 min-h-[40px] drop-shadow-lg cursor-pointer rounded-full"
          alt="userprofile"
          onClick={login}
          />

          {
            isMenu && (
            <motion.div
            initial={{opacity: 0, scale : 0.6}}
            animate={{ opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.6}}
             className='w-40 bg-gray-50 flex flex-col shadow-xl rounded-lg absolute top-12 right-2  py-2'>
              {user && user.email === "alv.diego19@gmail.com" && (
              <Link to={'/createItem'}>

                <p className='cursor-pointer px-4 py-3 flex items-center gap-3 hover:bg-slate-200 transition-all
                duration-100 ease-out text-textColor text-base '>
                  New Item<MdAdd/>
                </p>
              </Link>
              )}

              <ul
              className='flex flex-col  gap-0 '>
                  <li className='text-base text-headingColor hover:text-headingColor duration-100
                  transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'>About Us</li>
                  <li className='text-base text-headingColor hover:text-headingColor duration-100
                  transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'>Menu</li>
                  <li className='text-base text-headingColor hover:text-headingColor duration-100
                  transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'> Service</li>
                  <li className='text-base text-headingColor hover:text-headingColor duration-100
                  transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2'>Contact </li>
              </ul>

              <p className='cursor-pointer m-2 p-2 rounded-md shadow-md flex items-center justify-center
                gap-3 bg-gray-200 hover:bg-red-400 transition-all
              duration-100 ease-out text-textColor text-base' onClick={logout}>Logout <MdLogout/></p>
            </motion.div>
            )
          }
        </div>

      </div>
    </header>
  )
}
