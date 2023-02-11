import './App.css'
import { Navbar } from './components/Navbar/Navbar'
// import { Main } from './components/Main/Main'
// import { Home } from './page/Home/Home'
import RoutesIndex from './routes'
import Footer from './components/Footer/Footer'
import Scrollup from './components/Scrollup/Scrollup'

function App () {
  return (
    <>
      <Navbar />
      <RoutesIndex />
      <Footer />
      <Scrollup />
    </>
  )
}

export default App
