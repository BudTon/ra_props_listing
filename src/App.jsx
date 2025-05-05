import './App.css'
import Listing from './components/Listing'
import items from '../data/etsy.json'

function App() {

  return (
    <>
      <div className={'container'}>
        <h1>3. Props</h1>
        <h2>3.2 Список предложений</h2>
        <Listing items={items} />
      </div>
    </>
  )
}

export default App
