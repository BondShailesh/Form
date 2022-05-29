import React from 'react'
import styles from "./form.module.css"
import TableItem from './TableItem'
function Table({tabledata}) {
  return (
    <div className={styles.tableDiv} >
        <h1>Your Details</h1>
          <table className={styles.table}>
              <thead>
                  <tr >
                      <th className={styles.th} >Name</th>
                      <th className={styles.th}>Age</th>
                      <th className={styles.th}>Address</th>
                      <th className={styles.th}>Department</th>
                      <th className={styles.th}>Martial Status</th>
                  </tr>
                  </thead>
                  <tbody>
                      {tabledata.map((tabledata0)=>(
                      <TableItem tabledata0={tabledata0}/>
                   ))}

                  </tbody>
             
          </table>

        
    
    </div>
  )
}

export default Table


