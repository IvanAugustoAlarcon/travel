import { useEffect } from 'react'
// import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Data } from '../../components/Main/Data'
import './description.css'

const Description = () => {
  const { id } = useParams()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [])
  return (
    <>
      {Data.filter(item => {
        if (item.id === parseInt(id)) {
          return item
        }
        return null
      }).map(item => (
        <div className='container__description' key={item.id}>
          <h1>{item.title}</h1>
          <h5>{item.location}</h5>
          <div className='img__container'>
            <img className='img__description' src={item.image} alt='' />
          </div>
          <div className='p__container'>
            <p className='p__description'>{item.description}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default Description
