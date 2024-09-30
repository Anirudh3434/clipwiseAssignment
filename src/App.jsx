import { useState } from 'react'


import Header from './component/Header'
import HomeSection from './component/HomeSection'
import ProductSection from './component/ProductSection'
import BestPrice from './component/BestPrice'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div  className="App">
      <Header/>
      <HomeSection/>
      <ProductSection/>
      <BestPrice/>
    </div>
  )
}

export default App
