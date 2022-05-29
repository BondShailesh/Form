import React from 'react'

function TableItem({tabledata}) {
    
  return (
    <div>
        <h1>Your Details</h1>
      <p>Name : {tabledata.Name}</p>
      <p>  Age : {tabledata.Age}</p>
      <p> Address : {tabledata.Address}</p>
      <p>Department : {tabledata.dept}</p>
      <p>Martial Status : {tabledata.maritalState ? "Married" : ""}</p>
      {/* <p>Department : {tabledata.FileName}</p> */}
    </div>
  )
}

export default TableItem
