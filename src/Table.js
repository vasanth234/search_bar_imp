import React from 'react'
import './table.css'
const Table = ({demo}) => {
  return (
    <table className='tabular'>
        <thead>
            <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>email</th>
                <th>gender</th>
            </tr>
        </thead>
        {
          demo.map((rt)=>{
            return (
            <tr key={rt.id}>
              <td>{rt.first_name}</td>
              <td>{rt.last_name}</td>
              <td>{rt.email}</td>
              <td>{rt.gender}</td>
            </tr>
            )}
          )
        }
        
    </table>
  )
}

export default Table
