import { useEffect } from 'react'
import './App.css'
import TemplatePicker from './components/TemplatePicker'
import Template1 from './templates/Template1'
import Template2 from './templates/Template2'
import Template3 from './templates/Template3'

function App() {
  const params = new URLSearchParams(window.location.search)
  const templateId = params.get('t')
  const validTemplate = templateId && ['1', '2', '3'].includes(templateId)

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
      {templateId === '1' && <Template1 />}
      {templateId === '2' && <Template2 />}
      {templateId === '3' && <Template3 />}
    </>
  )
}

export default App
