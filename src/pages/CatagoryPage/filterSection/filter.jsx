import React,{useState, useEffect} from 'react'
import './filter.scss'

export default function Filter() {

  
  const [radioValue, setRadioValue] = useState(0)
  const [verify, setVerify] = useState(false)
  const [range, setRange] = useState(0) 
  
  // eslint-disable-next-line
  const [max, setMax] = useState (300)
  
  useEffect(()=>{
    console.log(radioValue);
    console.log(verify);
    console.log(range);
  },
  [radioValue,verify,range]
  )
  
  return (
      <div className='filter-container'>
          <div className='radio-btn'>


            <label><input type="radio" name="radio" onClick={() => setRadioValue("range")} /> Select Your Price Range</label>
              <input type="range" min="0" max={max} stop="1" style={radioValue === 'range' ? {display: 'block'} : {display: 'none'}} defaultValue='0' onChange={e => setRange(e.target.value)} />
                <p style={radioValue === 'range' ? {display: 'block'} : {display: 'none'}}>{range}</p>

            <label><input type="radio" name="radio" value="Best-match"  onClick={() => setRadioValue("best_match")} />  Best Match </label>
            <label><input type="radio" name="radio" value="Ending-soon"  onClick={() => setRadioValue("ending_soon")} /> Ending Soon </label>
          </div>

          <div className='check-box'>
          <label><input type="checkbox" value={verify}  onChange={() => setVerify(!verify)} /> Verified sellers</label>


          </div>
      </div>
  )
}
