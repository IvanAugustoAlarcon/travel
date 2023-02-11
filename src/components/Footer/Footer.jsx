import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h1 className='footer__title'>Travel</h1>

        <div className='footer__social'>
          <a href='https://www.instagram.com/' className='footer__social-link' target='_blanck'>
            <i className='bx bxl-facebook' />
          </a>

          <a href='https://www.instagram.com/' className='footer__social-link' target='_blanck'>
            <i className='bx bxl-instagram' />
          </a>

        </div>
        <span className='footer__copy'>&#169; All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer
