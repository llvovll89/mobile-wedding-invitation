import Header3 from '../components/Header3'
import CoupleInfo from '../components/CoupleInfo'
import Gallery from '../components/Gallery'
import EventInfo from '../components/EventInfo'
import Share from '../components/Share'
import AccountInfo from '../components/AccountInfo'
import Guestbook from '../components/Guestbook'
import MusicPlayer from '../components/MusicPlayer'
import AnimatedSection from '../components/AnimatedSection'

function GoldDivider() {
  return (
    <div
      className="flex items-center justify-center py-8"
      style={{ backgroundColor: '#0f2340' }}
    >
      <div
        className="w-20 h-[1px]"
        style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.5))' }}
      ></div>
      <span className="mx-3 text-sm" style={{ color: '#c9a84c' }}>◆</span>
      <div
        className="w-20 h-[1px]"
        style={{ background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.5))' }}
      ></div>
    </div>
  )
}

function Template3() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0f2340' }}>
      <AnimatedSection variant="fadeIn">
        <Header3 />
      </AnimatedSection>

      <GoldDivider />

      <AnimatedSection variant="slideUp" delay={0.1}>
        <CoupleInfo />
      </AnimatedSection>

      <GoldDivider />

      <AnimatedSection variant="slideUp" delay={0.2}>
        <Gallery />
      </AnimatedSection>

      <GoldDivider />

      <AnimatedSection variant="slideUp" delay={0.1}>
        <EventInfo />
      </AnimatedSection>

      <GoldDivider />

      <AnimatedSection variant="scale" delay={0.1}>
        <Guestbook />
      </AnimatedSection>

      <GoldDivider />

      <AnimatedSection variant="slideUp" delay={0.1}>
        <Share />
      </AnimatedSection>

      <GoldDivider />

      <AnimatedSection variant="slideUp" delay={0.1}>
        <AccountInfo />
      </AnimatedSection>

      <MusicPlayer />
    </div>
  )
}

export default Template3
