import React from 'react'
import styles from "./form.module.css"
function TableItem({tabledata0}) {
    // 
    console.log(tabledata0);
  return (
    <tr>
          <td className={styles.td}> {tabledata0.Name}</td>
          <td className={styles.td}>  {tabledata0.Age} </td> 
          <td className={styles.td}>{tabledata0.Address}</td> 
          <td className={styles.td}>{tabledata0.dept}</td>
          <td className={styles.td}>{tabledata0.maritalState ? "Married" : ""} </td>
    </tr>
  )
}

export default TableItem
