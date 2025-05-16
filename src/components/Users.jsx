import React from 'react'

const Users = ({values, setvalues}) => { 
  const handleDelete=(userID)=>{
    const delUser= values.filter(e=>e.id !==userID)
    setvalues(delUser) 
  }
  
  
  

  return (
    <div className='w-full'>
    <div>
      <h1 className='font-bold text-3xl  text-blue-500 text-center'>USERS</h1>
      <div className='border border-black h-[400px] mt-7 rounded-xl p-2 flex gap-2 flex-wrap overflow-scroll bg-[url(https://cdn.pixabay.com/photo/2020/06/01/08/46/water-5245722_1280.jpg)] bg-cover bg-center bg-no-repeat'>
       {values.map((e,i)=>(
        <div key={e.id} className='p-2 bg-gra text-white w-fit rounded-xl font-mono h-fit '>
          <p> <strong className='text-sm'>NAME:</strong>  {e.name}</p>
          <p> <strong className='text-sm'>EMAIL:</strong>  {e.email}</p>
          <button
          onClick={()=>handleDelete(e.id)}
           className='bg-white text-black font-[poppins] text-[12px] rounded px-3 py-0 font-semibold border border-black'>Delete</button>
        </div>
       ))
      }
      </div>
     </div>
    </div>
  )
}

export default Users