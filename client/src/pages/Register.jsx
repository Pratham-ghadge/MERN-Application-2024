import Lottie from 'lottie-react'
import React, { useState } from 'react'
import Registration from '../assets/Registration.json'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store/Auth'
import {toast} from 'react-toastify'
const Register = () => {

  const [user ,setUser] = useState({
    username : "",
    email:"",
    phone:"",
    password:""
  })

  const navigate = useNavigate();
  const {servertokenInLS} = useAuth();

  const handleInput = (e)=>{
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ... user,
      [name]:value,
    })

  }

  const handleSubmit = async (e)=>{

    try {
      
    
    e.preventDefault();
    console.log(user);
     const response = await fetch(`http://localhost:5000/api/auth/register`,{
      method:'POST',
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(user),
     });

     console.log(response);

     const res_data = await response.json();

     if(response.ok){
     
     servertokenInLS(res_data.token);

      setUser({ username : "",
      email:"",
      phone:"",
      password:""
    });
    toast.success("Registration successfully")
    navigate("/login");
     }else{
      toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
     }
    } catch (error) {
      console.log("register",error)
    }
  }
  return (
    <div className='max-w-[1240px] mx-auto my-10  md:grid grid-cols-2 '>
      <div className=' col-span-1  '>
      <Lottie animationData={Registration}></Lottie>
      </div>
      <div className='  col-span-1  item-center  '>
        
       <form onSubmit={handleSubmit} className='mt-28'>
        
       <div className='ml-20 mt-4 '>
              <label  className="block   text-sm font-medium leading-6 text-gray-900">
                 Name
              </label>
              
              <div className="mt-2">
                <input
                  name="username"
                  autoComplete='off'
                  value={user.username}
                  onChange={handleInput}
                  type="text"
                  required
                  className="block w-[80%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className='ml-20 mt-4'>
              <label  className="block   text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  name="email"
                  type="email"
                  autoComplete='off'
                  value={user.email}
                  onChange={handleInput}
                  required
                  className="block w-[80%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div><div className='ml-20 mt-4'>
              <label  className="block   text-sm font-medium leading-6 text-gray-900">
                Phone No
              </label>
              <div className="mt-2">
                <input
                  name="phone"
                  type="number"
                  autoComplete='off'
                  value={user.phone}
                  onChange={handleInput}
                  required
                  className="block w-[80%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className='ml-20 mt-4'>
              <label  className="block   text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  name="password"
                  type="password"
                  value={user.password}
                  onChange={handleInput}
                  autoComplete='off'
                  required
                  className="block w-[80%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <button type='submit' className='block mt-7 w-[80%] rounded-md border-0 py-1.5 text-white bg-[#66FCF1]'>REGESTER NOW</button>

            </div>
       </form>
      </div>
    </div>
  )
}

export default Register
