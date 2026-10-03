import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'




const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

const [taskTitle, setTaskTitle] = useState('')
const [taskDate, setTaskDate] = useState('')
const [assignedTo, setAssignedTo] = useState('')
const [category, setCategory] = useState('')
const [description, setDescription] = useState('')

const [newTask, setNewTask] = useState([])

const submitHandler = (e) =>{
    e.preventDefault() 

    setNewTask([...newTask, {taskTitle, taskDate, assignedTo, category, description,active:false, newTask:true, completed:false, Failed:false}])

   const data = JSON.parse(localStorage.getItem('employees'))

   data.forEach(function(elem){
    if(assignedTo === elem.firstName){
      elem.tasks.push(newTask)
     
    }
   })
  setUserData(data)
   console.log(data);
   
   
    setTaskTitle('')
    setTaskDate('')
    setAssignedTo('')
    setCategory('')
    setDescription('')
}



  return (
     <div className="p-5 bg-[#1c1c1c] mt-7 rounded ">
            <form onSubmit={(e)=>{
              submitHandler(e)
            }}
             className='flex flex-wrap w-full items-start justify-between '>
               <div className='w-1/2 '>
                 <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Tital</h3>
                    <input
                    value={taskTitle}
                    onChange={(e)=>setTaskTitle(e.target.value)}
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border  border-gray-400 mb-4 placeholder:text-white' type="text" placeholder='Make a UI design ' />
                    </div>
                    <div className="text-white">
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                 <input value={taskDate}
                  onChange={(e)=>setTaskDate(e.target.value)}
                 className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4 placeholder:text-white '
                 type="date" />
                 </div>
                <div className="">
                    <h3 className='text-sm text-gray-300 mb-0.5'>Asign to </h3>
                <input value={assignedTo}
                 onChange={(e)=>setAssignedTo(e.target.value)}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border  border-gray-400 mb-4 placeholder:text-white '
                type="text" placeholder='employee name' />
                </div>
                <div className="">
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input value={category} 
                 onChange={(e)=>setCategory(e.target.value)}
                  className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4 placeholder:text-white'
                 type="text" placeholder='design, dev ,etc' />
                </div>
               </div>
               <div className="w-2/5 flex flex-col items-start">
                 <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea value={description}
                onChange={(e)=>setDescription(e.target.value)}
                className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400 mb-4 placeholder:text-white' name='' id='' cols='30' rows='10'placeholder='' />
               </div>
              
                <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
            </form>
        </div>
  )
}

export default CreateTask