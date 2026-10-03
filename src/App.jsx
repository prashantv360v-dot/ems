import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeDashboard from './components/Dashboard/EmployeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

function App() {
 
  const [user, setUser] = useState(null)
  const [logInUserData, setLogInUserData] = useState(null)
    const [userData, setUserData] = useContext(AuthContext)
   
    
    useEffect(()=>{
      const loggedInUser = localStorage.getItem("loggedInUser")
      
      if (loggedInUser){
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setLogInUserData(userData.data)
      }
    },[])


  const handleLogin = (email,password)=>{
    if( email==='admin@example.com' && password==='1234'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      
    }else if(userData && userData.employees){
      const employee = userData.employees.find((e)=>email === e.email && password === e.password)
      if(employee){
        setUser('employee')
      setLogInUserData(employee)
       localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data: employee}))
      
    }else{
      alert("Invalid Credentials")
    }
  }else{
    alert("Invalid Credentials")
  }
}
  
    
  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
      <AdminDashboard  changeUser={setUser}/>
       ) : user === 'employee' ? (
       
       <EmployeDashboard changeUser={setUser} data={logInUserData} /> 
       ) : null} 
    </>
  )
}


export default App
