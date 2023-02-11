import { Routes, Route } from 'react-router-dom'
import { Home } from '../page/Home/Home'
import Description from '../page/Description/Description'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/description/:id' element={<Description />} />
    </Routes>
  )
}

export default RoutesIndex
