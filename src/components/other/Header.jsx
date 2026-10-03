import React from 'react'

const Header = (props) => {

  

    const logOutUser = ()=>{
      localStorage.setItem('loggedInUser','')
      props.changeUser('')
      // window.location.reload()
    }
  
  return (
    <div>
        <div className="flex text-white justify-between items-end">
            <h2 className='text-3xl font-medium'>Hello <br /><span className='text-4xl font-semibold'>{props.data?.firstName || 'Admin'} 👋</span></h2>
            <button 
            onClick={logOutUser}
            className='text-lg bg-red-600 rounded-xl px-5 py-2 '>Log Out</button>
        </div>

    </div>
  )
}

export default Header