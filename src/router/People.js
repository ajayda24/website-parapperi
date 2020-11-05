import React, { useState } from 'react'
import { data } from '../data'
import { Link } from 'react-router-dom'
const People = () => {
  const [people, setPeople] = useState(data)

  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var yyyy = today.getFullYear()
  today = mm + '/' + dd + '/' + yyyy

  return (
    <div>
      <h1 className='mb-4'>Post</h1>
      <div className='card-deck row row-cols-1 row-cols-md-3'>
        {people.map((person) => {
          const date1 = new Date(person.time)
          const date2 = new Date(today)
          const diffTime = Math.abs(date2 - date1)
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
          return (
            <div
              key={person.id}
              className='col col-sm-6 col-md-4 col-lg-3 mb-4 '
            >
              <div className='card h-100 text-dark text-center  border-dark mb-3'>
                <div className='card-body'>
                  <h2 className='card-title'>{person.name}</h2>
                  <p className='card-text'>{person.post}</p>
                  <Link to={`/person/${person.id}`} className='btn btn-dark'>
                    Read More
                    {/* <img src='...' alt='' width='70px' /> */}
                  </Link>
                </div>
                <div className='card-footer'>
                  <small className='text-muted'>
                    Updated {diffDays} days ago
                  </small>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default People
