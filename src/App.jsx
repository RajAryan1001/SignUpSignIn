import React, {useRef, useState } from 'react';
import Signup from './components/Signup'
import Signin from './components/Signin'
import Users from './components/Users'



const App = () => {

  const [toggle, settoggle] = useState(true)
  const [values, setvalues] = useState([])

  return (
    <div className='flex p-10 h-screen justify-around items-center gap-3'>
      {toggle ? <Signup  values={values} setvalues={setvalues} toggle={toggle}  settoggle={settoggle} /> : <Signin values={values} setvalues={setvalues}  toggle={toggle} settoggle={settoggle} />}
      <Users values={values} setvalues={setvalues}  />
    </div>
  )
}

export default App