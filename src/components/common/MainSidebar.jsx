import React from 'react'
import { useNavigate } from 'react-router-dom'
export const MainSidebar = () => {
    const navigate = useNavigate()
    const role = localStorage.getItem('user')
    const handleLogout = ()=>{
        localStorage.removeItem('user')
        localStorage.removeItem('password')
        navigate('/login')
    }
  return (
    <div className='AdminSidebar bg-red-500'>{role} Sidebar
    <span><button onClick={handleLogout}>Logout</button></span>
    </div>
  )
}
export default MainSidebar