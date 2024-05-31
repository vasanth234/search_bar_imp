import './App.css'
import Table from './Table'
import {Users} from './User'
import {useState} from 'react'
function App(){
  const [data,setData]=useState('');
  const secret=['first_name','last_name','email','gender']

  const search=(demo)=>{
    return demo.filter((item)=>secret.some(iter=>item[iter].toLowerCase().includes(data)));
  }
 
  return (
    <div className='App'>
      <center>
     <input type='text' placeholder='search' className='search' value={data} onChange={(e)=>setData(e.target.value)}/>
     
     <Table demo={search(Users)} />
      </center>
    
    </div>
  )
}

export default App