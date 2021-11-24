import React, {useContext, useState} from 'react'
import {AlertContext} from '../context/alert/alertContext'
import { GithubContext } from '../context/github/githubContext'

export const Search = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const github = useContext(GithubContext)

  const onSubmit = event => {
    if (event.key !== 'Enter') {
      return
    }

    github.clearUsers()

    if (value.trim()) {
      alert.hide()
      github.search(value.trim())
    } else {
      alert.show('Please enter a user name to search!')
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
