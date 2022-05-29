import React from "react";
import { useState } from "react";
import styles from "./form.module.css"
function Form({funTable}) {
  const [form, setForm] = useState({

  });

  const onchange0 = (e) => {
    let { name, value, type,checked,files } = e.target;
    // console.log(e.target.checked);
    if(type==="checkbox"){
        setForm({
            ...form,
            [name]: checked,
          });
    }else if(type=="file"){
      setForm({
        ...form,
        [name]: files,
      });
    }
    else{ 
    setForm({
      ...form,
      [name]: value,
    });
    }
};//const


     const  handleClick = (e) =>{
       e.preventDefault()
      funTable(form);
     }
     
  return (
    <div className={styles.form} >
      <div style={{width:"50%",margin:"auto",textAlign:"center"}}>
       <h1>Registration Form</h1>
      <form action="">
        <div>
          <label htmlFor="">NAME : </label>
          <input
            type="text"
            onChange={onchange0}
            name="Name"
            value={form.name}
          />
        </div>

        <div>
          <label htmlFor="">Age : </label>
          <input
            type="number"
            onChange={onchange0}
            name="Age"
            value={form.name}
          />
        </div>

        <div>
          <label htmlFor="">ADDRESS : </label>
          <input
            type="text"
            onChange={onchange0}
            name="Address"
            value={form.name}
          />
        </div>

        <div>
          <label htmlFor="">DEPARTMENT : </label>
          <select name="dept" onChange={onchange0} value={form.name}>
            <option value="">select</option>
            <option value="Human Resource">HR</option>
            <option value="Information Tech">IT</option>
            <option value="Hospitality">HOSPItality</option>
          </select>
        </div>

        <div>
          <label htmlFor="">marital state : </label>
          <input type="checkbox" onChange={onchange0} name="maritalState"
          checked={form.name}/>
        </div>
        <div>
          <label htmlFor="">Select File : </label>
          <input type="file" onChange={onchange0} name="FileName"
          value={form.name}/>
        </div>
        <div>
          <button type="submit" onClick={handleClick}>Submit</button>
        </div>
  
      </form>
      </div>
    </div>
  );
}

export default Form;
