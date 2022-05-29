import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import { useState } from 'react';
import TableItem from './components/TableItem';
import styles from "../src/components/form.module.css"

function App() {
  const [tabledata,setTableData] = useState({
    Name:"",
    Age: "",
    Address:"",
    dept:"",
    maritalState:"",
    FileName:""
  });

  const funTable = (dt)=>{
    setTableData(dt);
  }
  return (
    <div className={styles.app}>
      <Form funTable={funTable}/>

       <Table >
       <TableItem tabledata={tabledata}/>
     </Table>
    </div>
  );
}

export default App;
