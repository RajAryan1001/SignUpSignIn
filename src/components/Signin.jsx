import React from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';


const Signin = ({toggle, settoggle, values, setvalues}) => {
    const{register, handleSubmit, reset}=useForm()
    
      const handleForm=(data)=>{
          setvalues([...values, data])
          data.id= nanoid()
          toast.success("User Logged In")
          reset()
          console.log(data);
          
      }
    
  return (
    <div className='w-full'>
    <div className=''>
      <h1 className='font-bold text-3xl text-black-500 text-center'>SIGNIN</h1>
        <div className='w-full border border-black h-fit p-6 mt-7 rounded-xl flex flex-col justify-center bg-black text-white'>
          <form action="" className='text-center p-3 flex flex-col gap-4' onSubmit={handleSubmit(handleForm)}>
           <div >
              <h1 className='name font-bold font-[poppins] text-xl'>Email</h1>
              <input type="email"
               {...register("email")}
               placeholder='Enter your name'
              className='w-[85%] h-12 rounded-xl bg-[] border border-solid p-3 text-sm text-black'
               />
            </div>
            <div >
              <h1 className='name font-bold font-[poppins] text-xl'>Password</h1>
              <input type="password"
                {...register("password")}
               placeholder='******'
              className='w-[85%] h-12 rounded-xl bg-[] border border-solid p-3 text-sm text-black'
               />
            </div>
            <div className='flex justify-center gap-3'>
                <p>Don't have a account</p>
                <button onClick={()=>settoggle(!toggle)} className=' text-blue-500'>Signup</button>
            </div>

            <div>
              <button className='bg-sky-600 rounded text-white px-4 py-2'>Submit</button>
              <ToastContainer position="top-center" autoClose={2000} />
            </div>
          </form>
        </div>
     </div>
    </div>
  )
}

export default Signin
