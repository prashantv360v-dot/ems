import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {
  return (
    <div  id='tasklist'
    className='h-[50%] overflow-x-auto flex items-center justify-between flex-nowrap w-full py-5  gap-8 mt-10 '>
     {data?.tasks?.map((task,index)=>{
        if(task.active){
            return <AcceptTask key={index} task={task}  />
        }
        if(task.completed){
            return <CompleteTask key={index} task={task}  />
        }
        if(task.NewTask){
            return <NewTask key={index} task={task}  />
        }
        if(task.Failed){
            return <FailedTask key={index} task={task}   />
        }
     })}
        
    </div>

  )
}

export default TaskList