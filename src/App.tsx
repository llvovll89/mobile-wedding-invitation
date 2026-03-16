import { useEffect, useState } from 'react'
import './App.css'
import TemplatePicker from './components/TemplatePicker'
import Template1 from './templates/Template1'
import Template2 from './templates/Template2'
import Template3 from './templates/Template3'
import { fetchInvitationData } from './firebase/invitationService'
import type { InvitationData } from './types/invitation'
import { DEFAULT_INVITATION_DATA } from './types/invitation'

function App() {
  const params = new URLSearchParams(window.location.search)
  const templateId = params.get('t')
  const uid = params.get('uid')
  const validTemplate = templateId && ['1', '2', '3'].includes(templateId)

  const [data, setData] = useState<InvitationData>(DEFAULT_INVITATION_DATA)
  const [loading, setLoading] = useState(!!uid)

  useEffect(() => {
    if (!uid) {
      setLoading(false)
      return
    }
    fetchInvitationData(uid)
      .then((d) => { if (d) setData(d) })
      .finally(() => setLoading(false))
  }, [uid])

  useEffect(() => {
    if (validTemplate) {
      document.documentElement.setAttribute('data-theme', templateId!)
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
    return () => {
      document.documentElement.removeAttribute('data-theme')
    }
  }, [validTemplate, templateId])

  if (!validTemplate) {
    return <TemplatePicker />
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-8 h-8 rounded-full border-2 border-gray-300 border-t-transparent animate-spin" />
      </div>
    )
  }

  const backButton = (
    <div className="fixed top-3 left-3 z-50">
      <button
        onClick={() => (window.location.href = '/')}
        className="flex items-center gap-1.5 px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-black/20 rounded-full text-xs shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        style={{ color: '#000' }}
      >
        ← 템플릿 선택
      </button>
    </div>
  )

  return (
    <>
      {backButton}
      {templateId === '1' && <Template1 data={data} />}
      {templateId === '2' && <Template2 data={data} />}
      {templateId === '3' && <Template3 data={data} />}
    </>
  )
}

export default App
