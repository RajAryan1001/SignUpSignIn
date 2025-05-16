import React from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';

const Signup = ({toggle, settoggle, values, setvalues}) => { 
    
const{register, handleSubmit, reset,  formState:{errors}}=useForm();

    const handleForm=(data)=>{
        setvalues([...values, data])
        data.id= nanoid()
        toast.success("User created")
        reset()
    }

  return (
    <div className='w-full'>
        <div className=''>
      <h1 className='font-bold text-3xl text-red-500 text-center'>SIGNUP</h1>
        <div className='w-full h-fit p-5 border border-black mt-7 rounded-xl flex flex-col justify-center bg-black text-white'>
          <form action="" className='text-center p-3 flex flex-col gap-4' onSubmit={handleSubmit(handleForm)}>
            <div >
              <h1 className='name font-bold font-[poppins] text-xl'>Name</h1>
              <input type="text"
              name='name'
              {...register("name", {required:true})}
              placeholder='Enter your name'
              className='w-[85%] h-12 rounded-xl bg-[] border border-solid p-3 text-sm text-black'
              />
              {errors.name ?<p className='text-red-500'>Please fill this empty space</p>:""}
            </div>
            <div >
              <h1 className='name font-bold font-[poppins] text-xl'>Email</h1>
              <input type="email"
                {...register("email" ,{required:true})}
              placeholder='Enter your Email '
              className='w-[85%] h-12 rounded-xl bg-[] border border-solid p-3 text-sm text-black'
               />
               {errors.email?<p className='text-red-500'>Please your Email</p>:""}
            </div>
            <div >
              <h1 className='name font-bold font-[poppins] text-xl'>Password</h1>
              <input type="password"
                {...register("password", {required:true, minLength:5})}
              placeholder='Enter your password'
              className='w-[85%] h-12 rounded-xl bg-[] border border-solid p-3 text-sm text-black'
              />
              {errors.password?<p className='text-red-500'>Enter your password</p>:""}
              
            </div>
            <div className='flex justify-center gap-3'>
                <p>Already have a account?</p>
                <button onClick={()=>settoggle(!toggle)} className='text-blue-400'>Signin</button>
            </div>

            <div>
                <button
               className='bg-sky-600 rounded text-white px-4 py-2'>Submit
                </button>
                <ToastContainer position="top-center" autoClose={2000} />
            </div>
            

          </form>
        </div>
     </div>
    </div>
  )
}

export default Signup