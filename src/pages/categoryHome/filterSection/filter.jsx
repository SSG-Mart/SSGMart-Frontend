import React,{useState, useEffect} from 'react'
import './filter.scss'

export default function Filter() {
  const [radio,setRadio]=useState();
  const [data,setData] =useState(0);
  const [checked, setChecked] =useState ();

  
  useEffect(()=>{
    console.log (radio,checked)
  })
  
  
  return (
      <div className='filter-container'>
          <div className='radio-btn'>

            <label><input type="radio" name="radio" value={data} onChange={(e)=>setRadio(e.target.value)}/> Select Your Price Range</label>
              <input type="range" min="0" max="100" stop="1" defaultValue={0} onChange={(e)=>setData(e.target.value)} style={radio === 'data' ? {display: 'flex'} : {display: 'none'}} />
                <p style={radio === 'range' ? {display: 'flex'} : {display: 'none'}} >{data}</p>

            <label><input type="radio" name="radio" value="Best-match" onChange={(e)=>setRadio(e.target.value)}/>  Best Match </label>
            <label><input type="radio" name="radio" value="Ending-soon" onChange={(e)=>setRadio(e.target.value)}/> Ending Soon </label>
          <p>{radio}</p>
          </div>

          <div className='check-box'>
          <label><input type="checkbox" value="True" onChange={() => setChecked(!checked)} /> Verified sellers</label>
          </div>
      </div>
  )
}
