import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext)
    
  return (
    <div id='alltask'
     className='bg-[#1c1c1c] p-5 rounded mt-5 border-2 border-emerald-500 '>
                   <div className="bg-red-400 rounded border-2   mb-2 py-2 px-4 flex justify-center">
                      <h2 className='w-1/5 text-lg font-medium'>Employees Name</h2>
                    <h3 className='w-1/5 text-lg font-medium'>New Task</h3>
                    <h5 className='w-1/5 text-lg font-medium'>Active Task</h5>
                    <h5 className='w-1/5 text-lg font-medium'>Completed Task</h5>
                    <h5 className='w-1/5 text-lg font-medium'>Failed Task</h5>
                   </div>
        
      <div className=" ">
          {userData?.employees?.map(function(task, index){
            return   <div key={index} className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded">
                    <h2 className='w-1/5 text-lg font-medium text-white'>{task.firstName}</h2>
                    <h3 className='w-1/5 text-lg font-medium text-blue-500'>{task.taskSummary.newTask}</h3>
                    <h5 className='w-1/5 text-lg font-medium text-orange-500'>{task.taskSummary.active}</h5>
                    <h5 className='w-1/5 text-lg font-medium text-green-400'>{task.taskSummary.completed}</h5>
                    <h5 className='w-1/5 text-lg font-medium text-red-500'>{task.taskSummary.failed}</h5>
                </div>
    
            
        })}

      </div>
    </div>
  )
}

export default AllTask