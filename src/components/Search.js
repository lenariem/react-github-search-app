import React, {useContext, useState} from 'react'
import {AlertContext} from '../context/alert/alertContext'

export const Search = () => {
  const [value, setValue] = useState('')
  const {show} = useContext(AlertContext)

  const onSubmit = event => {
    if (event.key !== 'Enter') {
      return
    }

    if (value.trim()) {
      console.log('Make request with: ', value)
    } else {
      show('Please enter a user name to search!')
    }
  }

  return (
    <div className="form-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter a user name to search..."
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  )
}
