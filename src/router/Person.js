import React, { useState, useEffect } from 'react'
import { data } from '../data'
import { Link, useParams } from 'react-router-dom'

const Person = () => {
  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var yyyy = today.getFullYear()
  today = mm + '/' + dd + '/' + yyyy

  const [name, setName] = useState('default name')
  const [post, setPost] = useState('default post')
  const [time,setTime] = useState('default time')
  const { id } = useParams()

  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id))
    setName(newPerson.name)
    setPost(newPerson.post)
    setTime(newPerson.time)
  }, [])

  const date1 = new Date(time)
  const date2 = new Date(today)
  const diffTime = Math.abs(date2 - date1)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  return (
    <div className='card text-center'>
      <div className='card-header'>Featured</div>
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text'>{post}</p>
        <Link to='/people' className='btn'>
          Back To Posts
        </Link>
      </div>
      <div className='card-footer text-muted'>{diffDays} days ago</div>
    </div>
  )
}

export default Person
