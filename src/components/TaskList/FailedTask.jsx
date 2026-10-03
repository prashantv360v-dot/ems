import React from 'react'

const FailedTask = ({task}) => {
  return (
    <div className="shrink-0 h-full w-75 p-5 bg-orange-500 rounded-xl">
            <div className="flex justify-between items-center ">
                <h3 className='bg-red-500 text-sm px-3 py-1 rounded '>{task.category}</h3>
                <h4>{task.taskDate}</h4>

            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{task.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {task.taskDescription}
            </p>
            <div className="flex justify-between items-center mt-5">
                <button className='bg-red-600 text-sm px-3 py-1 rounded '>Failed</button>
            </div>

        </div>
  )
}

export default FailedTask