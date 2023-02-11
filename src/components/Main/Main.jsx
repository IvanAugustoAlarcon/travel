import React from 'react'
import './main.css'
import { Data } from './Data'
import { useNavigate } from 'react-router-dom'

export const Main = () => {
  const navigate = useNavigate()

  const handlePageProduct = (id) => {
    navigate(`/description/${id}`)
  }

  return (
    <section className='main section container' id='destinations'>
      <h3 className='section__title'> Dream Trips</h3>

      <div className='container'>
        <div className='row test'>
          {Data.map(({ id, image, title }) => (

            <div className=' col-sm-12 col-md-6 col-lg-5 col-xl-3 card-size' key={id}>
              <div
                className='card card-pointer'
                onClick={() => { handlePageProduct(id) }}
              >
                <img className='card-img-top img__card' src={image} alt='Card image cap' />
                <h3 className='testimonial__name'>{title}</h3>
              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  )
}
