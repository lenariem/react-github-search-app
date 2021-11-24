import React, {useContext} from 'react'
import {Search} from '../components/Search'
import {Card} from '../components/Card'
import {GithubContext} from '../context/github/githubContext'

export const Home = () => {
 const {loading, users} = useContext(GithubContext)
  
  return (
    <>
      <Search />
      <div className="row">
        {
        loading
          ? <p className="text-center">Loading...</p>
          : users.map( user => {
            return (
              <div className="col-sm-3 mb-4" key={user.id}>
                <Card user={user}/>
              </div>
            )
          })
      }
      </div>
    </>
  )
}
