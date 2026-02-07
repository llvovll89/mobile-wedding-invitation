import './App.css'
import Header from './components/Header'
import CoupleInfo from './components/CoupleInfo'
import Gallery from './components/Gallery'
import EventInfo from './components/EventInfo'
import Share from './components/Share'
import AccountInfo from './components/AccountInfo'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CoupleInfo />
      <Gallery />
      <EventInfo />
      <Share />
      <AccountInfo />
    </div>
  )
}

export default App
