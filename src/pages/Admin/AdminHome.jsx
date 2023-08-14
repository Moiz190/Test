import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getTodoList } from '../../store/slice/auth'
import { useDispatch } from 'react-redux'
export const AdminHome = () => {
    // const [data,setData] = useState([])
    // const dispatch = useDispatch()
  // useEffect(()=>{
  //   fetchList()
  //   // axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=>setData(res.data)).catch(e=>console.log(e))
  // },[])
  // const fetchList =async()=>{
  //   try{
  //     const res = await dispatch(getTodoList()).unwrap()
  //     console.log(res)
  //   }
  //   catch(e){
  //     console.log(e)
  //   }
  const data = []
  // }
  return (
    <div className='pa-1 grid grid-cols-4 gap-1'>
      {/* {data.map((user)=>(
          <div key={user?.userId} className='bg-red-300 flex flex-col p-2'>
            <span>Id: {user?.id}</span>
            <span>{user?.title}</span>
            <span className='mt-auto'>{user?.completed ? 'true': 'false'}</span>
          </div>
        ))
      } */}
    </div>
  )
}
export default AdminHome