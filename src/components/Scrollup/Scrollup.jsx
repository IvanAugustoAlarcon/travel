import React from 'react'
import './scrollup.css'

const Scrollup = () => {
  window.addEventListener('scroll', function () {
    const scrollUp = document.querySelector('.scrollup')
    if (this.scrollY >= 160) scrollUp.classList.add('show-scroll')
    else scrollUp.classList.remove('show-scroll')
  })

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, left: 0 })
  }
  return (
    <div className='scrollup' onClick={handleScrollUp}>
      <i className='uil uil-arrow-up scrollup__icon' />
    </div>
  )
}

export default Scrollup
