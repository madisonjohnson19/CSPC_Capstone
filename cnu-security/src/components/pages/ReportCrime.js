import React from 'react'
import { useState } from 'react';
import './ReportCrime.css'

function ReportCrime() {
  const [inputs, setInputs] = useState({});
  const [MyCar, setMyCar] = useState("Volvo");
  const handleChange = (event) => {
    
    setMyCar(event.target.value)
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }
  

  return (

    <div className='form-box'>
    <form onSubmit={handleSubmit} className="form">
    <div className = "field1">
      <label>Type of Crime
      <select className="item" value={MyCar} onChange={handleChange}>
        <option value="Ford">Rape / Sexual Assault</option>
        <option value="Volvo">Assault</option>
        <option value="Fiat">Weapons</option>
        <option value="Volvo">Drugs</option>
        <option value="Fiat">Alcohol</option>
        <option value="Volvo">Larceny / Theft</option>
        <option value="Fiat">Vandelism </option>
        <option value="Volvo">Assault</option>
        <option value="Fiat">Others (Please Specify Below)</option>
      </select>
      </label>
    <label className="item"
    styles={{
      color:"red"
    }}>Specific location or address:
    <textarea
      type="text" 
      name="username" 
      value={inputs.username || ""} 
      onChange={handleChange}
      
    />
    </label>
    <label>Relevant Dates / Times:
    <textarea
        type="number" 
        name="age" 
        value={inputs.age || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Description of Incident:
    <textarea
        type="number" 
        name="age" 
        value={inputs.age || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Suspect's Name and Description:
    <textarea
        type="number" 
        name="age" 
        value={inputs.age || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Vehicle Description (if applicable):
    <textarea
        type="number" 
        name="age" 
        value={inputs.age || ""} 
        onChange={handleChange}
      />
      </label>
      <input type="submit" />
      </div>
  </form>
  </div>

  )
}

export default ReportCrime