import './App.css'
import Header from './components/Header'
import CoupleInfo from './components/CoupleInfo'
import Gallery from './components/Gallery'
import EventInfo from './components/EventInfo'
import Share from './components/Share'
import AccountInfo from './components/AccountInfo'
import Guestbook from './components/Guestbook'
import MusicPlayer from './components/MusicPlayer'
import AnimatedSection from './components/AnimatedSection'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <AnimatedSection variant="fadeIn">
        <Header />
      </AnimatedSection>

      <AnimatedSection variant="slideUp" delay={0.1}>
        <CoupleInfo />
      </AnimatedSection>

      <AnimatedSection variant="slideUp" delay={0.2}>
        <Gallery />
      </AnimatedSection>

      <AnimatedSection variant="slideUp" delay={0.1}>
        <EventInfo />
      </AnimatedSection>

      <AnimatedSection variant="scale" delay={0.1}>
        <Guestbook />
      </AnimatedSection>

      <AnimatedSection variant="slideUp" delay={0.1}>
        <Share />
      </AnimatedSection>

      <AnimatedSection variant="slideUp" delay={0.1}>
        <AccountInfo />
      </AnimatedSection>

      <MusicPlayer />
    </div>
  )
}

export default App
