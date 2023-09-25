import React, { useEffect, useState } from 'react'
import '../../styles/AdminSidebar.css'
export const AdminSidebar = () => {
  const [selectedRole,setSelectedRole] = useState('Admin')
  useEffect(()=>{
    if(selectedRole === 'Admin') setSelectedRole('Brand')
    else setSelectedRole('Brand')
  })
  return (
    <div className='AdminSidebar bg-red-500'>{selectedRole} Sidebar</div>
  )
}
export default AdminSidebar