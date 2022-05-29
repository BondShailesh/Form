import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import { useState } from 'react';
import TableItem from './components/TableItem';
import styles from "../src/components/form.module.css"

function App() {
  const [tabledata,setTableData] = useState([]);

  const funTable = (dt)=>{
    setTableData([...tabledata,dt]);
  }
  return (
    <div className={styles.app}>
      <Form funTable={funTable}/>

       <Table tabledata ={tabledata} />

    </div>
  );
}

export default App;
