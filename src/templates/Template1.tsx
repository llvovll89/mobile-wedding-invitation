import Header from '../components/Header'
import CoupleInfo from '../components/CoupleInfo'
import Gallery from '../components/Gallery'
import EventInfo from '../components/EventInfo'
import Share from '../components/Share'
import AccountInfo from '../components/AccountInfo'
import Guestbook from '../components/Guestbook'
import MusicPlayer from '../components/MusicPlayer'
import AnimatedSection from '../components/AnimatedSection'
import type { InvitationData } from '../types/invitation'

interface Template1Props {
  data: InvitationData
}

function Template1({ data }: Template1Props) {
  return (
    <div className="min-h-screen">
      <AnimatedSection variant="fadeIn"><Header data={data} /></AnimatedSection>
      <AnimatedSection variant="slideUp" delay={0.1}><CoupleInfo data={data} /></AnimatedSection>
      <AnimatedSection variant="slideUp" delay={0.2}><Gallery /></AnimatedSection>
      <AnimatedSection variant="slideUp" delay={0.1}><EventInfo data={data} /></AnimatedSection>
      <AnimatedSection variant="scale" delay={0.1}><Guestbook /></AnimatedSection>
      <AnimatedSection variant="slideUp" delay={0.1}><Share /></AnimatedSection>
      <AnimatedSection variant="slideUp" delay={0.1}><AccountInfo data={data} /></AnimatedSection>
      <MusicPlayer />
    </div>
  )
}

export default Template1
