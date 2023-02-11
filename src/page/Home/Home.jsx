import React from 'react'
import { Main } from '../../components/Main/Main'
import Contact from '../../components/Contact/Contact'
import './home.css'

export const Home = () => {
  return (
    <>
      <section className='home section' id='home'>
        <div className='img__div'>
          <div>
            <h1 className='title__text'>
              TO SEE THE WORLD, THINGS DANGEROUS TO COME TO, TO SEE
              BEHIND WALLS, DRAW CLOSER, TO FIND EACH OTHER AND TO FEEL.
              THAT IS THE PURPOSE OF LIFE.
            </h1>
          </div>
        </div>
      </section>
      <Main />
      <Contact />
    </>
  )
}
