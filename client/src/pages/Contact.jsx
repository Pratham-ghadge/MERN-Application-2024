import React, { useState } from 'react'
import Contacts from '../assets/Contacts.json'
import Lottie from 'lottie-react'
import  {useAuth} from "../store/Auth"


 const defaultContactFormData = {
  username:"",
  email:"",
  message:"",
 }
const Contact = () => {
  const [contact , setContact] = useState(defaultContactFormData)

   const [userData , setUserData] = useState(true);

   const { user } = useAuth();
  if (userData && user){
    setContact({
      username: user.username,
      email : user.email,
      message:""

    })

    setUserData(false);
  }

    const handleInput = (e) => {
      console.log(e);
      const name = e.target.name;
      const value = e.target.value;
      setContact({
        ... contact,
        [name]:value,
      })
    }

     const handleSubmit = async(e) => {
      e.preventDefault();

      try {
       
      const response = await fetch("https://mern-application-pratham.vercel.app/api/form/contact",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
      
      },
      body:JSON.stringify(contact),

      });

      if(response.ok){
    setContact(defaultContactFormData);
    const data = response.json()
    console.log(data);
    alert("Message send Successfully");
      }



      } catch (error) {
        console.log(error)
      }
      console.log(contact)
     }
  return (
    
    <div className='w-full mx-auto mt-[100px]  md:grid grid-cols-2  bg-slate-600'>
      
      <div className='  col-span-1  item-center  '>
        
       <form onSubmit={handleSubmit} className='mt-[1%] md:ml-28'>
       
       <div className='ml-20 mt-4'>
              <label  className="block   text-sm font-medium leading-6 text-gray-900">
               Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  value={contact.username}
                  onChange={handleInput}
                  autoComplete='off'
                  required
                  className="block w-[80%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> 

            <div className='ml-20 mt-4'>
              <label htmlFor="email" className="block   text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={contact.email}
                  onChange={handleInput}
                  autoComplete='off'
                  required
                  className="block w-[80%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className='ml-20 mt-4'>
              <label  className="block   text-sm font-medium leading-6 text-gray-900">
                Message
              </label>
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  type="message"
                  value={contact.message}
                  onChange={handleInput}
                  autoComplete='off'
                  required
                  cols="30"
                  rows="10"
                  className="block w-[80%] h-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <button type='submit' className='block mt-7 w-[40%] rounded-md border-0 py-1.5 text-white bg-[#66FCF1]'>SUBMIT</button>

            </div>
       </form>
      </div>

      <div className=' col-span-1  w-[100%]'>
      <Lottie animationData={Contacts}></Lottie>
      </div>
      
    </div>
    
  )
}

export default Contact
