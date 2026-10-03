import React from 'react'

const CompleteTask = ( {task} ) => {
  return (
   <div className="shrink-0 h-full w-75 p-5 bg-blue-400 rounded-xl">
            <div className="flex justify-between items-center ">
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>{task.category}</h3>
                <h4>{task.taskDate}</h4>

            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{task.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {task.taskDescription}
            </p>
            <div className="flex justify-between items-center mt-5">
                <button className='bg-green-600 text-sm w-full px-3 py-1 rounded '>Completed</button>
            </div>

        </div>
  )
}

export default CompleteTask