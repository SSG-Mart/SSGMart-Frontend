import React, { useState, useEffect } from 'react'
import './filter.scss'

export default function Filter() {


  const [radioValue, setRadioValue] = useState(0)
  const [verify, setVerify] = useState(false)
  const [range, setRange] = useState(0)


  const [max,] = useState(300)

  useEffect(() => {
    console.log(radioValue);
    console.log(verify);
    console.log(range);
  },
    [radioValue, verify, range]
  )

  return (
    <></>
  )
}
