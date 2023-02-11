import { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  /* ============= Change Background Header ================ */
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header')
    if (this.scrollY >= 80) header.classList.add('scroll-header')
    else header.classList.remove('scroll-header')
  })

  /* ============= Toggle Menu ================ */
  const [Toggle, showMenu] = useState(false)
  const [activeNav, setActiveNav] = useState('#home')
  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='index.html' className='nav__logo'>
          <h1><i className='bx bx-globe-alt icon' />Travel</h1>
        </a>
        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className='nav__list grid'>

            <li className='nav__item'>
              {/* <a
                href='#home'
                onClick={() => setActiveNav('#home')}
                className={
                activeNav === '#home'
                  ? 'nav__link active-link'
                  : 'nav__link'
}
              >
                <i className='uil uil-estate nav__icon' /> Home
              </a> */}
              <Link
                to='/'
                preventScrollReset={false}
                onClick={() => setActiveNav('#home')}
                className={
                activeNav === '#home'
                  ? 'nav__link active-link'
                  : 'nav__link'
}
              > <i className='uil uil-estate nav__icon' />Home
              </Link>
            </li>

            <li className='nav__item'>
              <a
                href='#destinations'
                onClick={() => setActiveNav('#destinations')}
                className={
                activeNav === '#destinations'
                  ? 'nav__link active-link'
                  : 'nav__link'
}
              >
                <i className='uil uil-package nav__icon' /> Destinations
              </a>
            </li>

            <li className='nav__item'>
              <a
                href='#contact'
                onClick={() => setActiveNav('#contact')}
                className={
                activeNav === '#contact'
                  ? 'nav__link active-link'
                  : 'nav__link'
}
              >
                <i className='uil uil-message nav__icon' /> Contact
              </a>
            </li>

          </ul>
          <i className='uil uil-times nav__close' onClick={() => showMenu(!Toggle)} />
        </div>
        <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
          <i className={!Toggle ? 'uil uil-apps' : ''} />
        </div>
      </nav>
    </header>
  )
}
