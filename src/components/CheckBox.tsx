import React, { useState } from 'react'
import './CheckBox.css'

type Props = {
  data: string
  handleChange: (label: string) => void
}

export const CheckBox = (props: Props) => {
  const [isChecked, toggleChecked] = useState(false)
  const handleToggle = () => {
    toggleChecked(!isChecked)
    props.handleChange(props.data)
  }
  return (
    <div>
      <label className="filter-item">
        <label htmlFor="">{props.data}</label>
        <input type="checkbox" checked={isChecked} onClick={handleToggle} />
        <span className="checkmark"></span>
      </label>
  
    </div>
  )
}
