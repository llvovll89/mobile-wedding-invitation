import Header2 from '../components/Header2'
import CoupleInfo from '../components/CoupleInfo'
import Gallery from '../components/Gallery'
import EventInfo from '../components/EventInfo'
import Share from '../components/Share'
import AccountInfo from '../components/AccountInfo'
import Guestbook from '../components/Guestbook'
import MusicPlayer from '../components/MusicPlayer'
import AnimatedSection from '../components/AnimatedSection'
import type { InvitationData } from '../types/invitation'

interface Template2Props {
  data: InvitationData
}

function FloralDivider() {
  return (
    <div className="flex items-center justify-center py-6" style={{ backgroundColor: '#fce7f3' }}>
      <div className="w-16 h-[1px] mx-3" style={{ background: 'rgba(190,24,93,0.3)' }}></div>
      <span className="text-2xl" role="img" aria-label="cherry blossom">🌸</span>
      <div className="w-10 h-[1px] mx-2" style={{ background: 'rgba(190,24,93,0.2)' }}></div>
      <span className="text-xl" role="img" aria-label="tulip">🌷</span>
      <div className="w-10 h-[1px] mx-2" style={{ background: 'rgba(190,24,93,0.2)' }}></div>
      <span className="text-2xl" role="img" aria-label="cherry blossom">🌸</span>
      <div className="w-16 h-[1px] mx-3" style={{ background: 'rgba(190,24,93,0.3)' }}></div>
    </div>
  )
}

function Template2({ data }: Template2Props) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fff5f7' }}>
      <AnimatedSection variant="fadeIn"><Header2 data={data} /></AnimatedSection>
      <FloralDivider />
      <AnimatedSection variant="slideUp" delay={0.1}><CoupleInfo data={data} /></AnimatedSection>
      <FloralDivider />
      <AnimatedSection variant="slideUp" delay={0.2}><Gallery /></AnimatedSection>
      <FloralDivider />
      <AnimatedSection variant="slideUp" delay={0.1}><EventInfo data={data} /></AnimatedSection>
      <FloralDivider />
      <AnimatedSection variant="scale" delay={0.1}><Guestbook /></AnimatedSection>
      <FloralDivider />
      <AnimatedSection variant="slideUp" delay={0.1}><Share /></AnimatedSection>
      <FloralDivider />
      <AnimatedSection variant="slideUp" delay={0.1}><AccountInfo data={data} /></AnimatedSection>
      <MusicPlayer />
    </div>
  )
}

export default Template2
