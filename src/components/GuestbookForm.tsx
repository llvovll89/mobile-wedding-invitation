import { useState, FormEvent } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase/config'

interface GuestbookFormProps {
  onSuccess?: () => void
}

function GuestbookForm({ onSuccess }: GuestbookFormProps) {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>({
    show: false,
    message: '',
    type: 'success',
  })

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ show: true, message, type })
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' })
    }, 3000)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // 유효성 검사
    if (!name.trim() || !message.trim()) {
      showToast('이름과 메시지를 입력해주세요.', 'error')
      return
    }

    if (name.length > 50) {
      showToast('이름은 50자 이내로 입력해주세요.', 'error')
      return
    }

    if (message.length > 500) {
      showToast('메시지는 500자 이내로 입력해주세요.', 'error')
      return
    }

    // Rate limiting 체크 (로컬 스토리지)
    const lastSubmit = localStorage.getItem('lastGuestbookSubmit')
    if (lastSubmit) {
      const timeDiff = Date.now() - parseInt(lastSubmit)
      const cooldown = 60 * 1000 // 1분
      if (timeDiff < cooldown) {
        const remainingSeconds = Math.ceil((cooldown - timeDiff) / 1000)
        showToast(`${remainingSeconds}초 후에 다시 작성할 수 있습니다.`, 'error')
        return
      }
    }

    setIsSubmitting(true)

    try {
      // Firestore에 메시지 추가
      await addDoc(collection(db, 'guestbook'), {
        name: name.trim(),
        message: message.trim(),
        createdAt: serverTimestamp(),
      })

      // 성공 처리
      localStorage.setItem('lastGuestbookSubmit', Date.now().toString())
      setName('')
      setMessage('')
      showToast('축하 메시지가 등록되었습니다! 🎉', 'success')

      if (onSuccess) {
        onSuccess()
      }
    } catch (error) {
      console.error('방명록 작성 실패:', error)
      showToast('메시지 등록에 실패했습니다. 다시 시도해주세요.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* 이름 입력 */}
        <div>
          <label htmlFor="name" className="block text-sm text-gray-700 mb-2 font-light">
            이름
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={50}
            className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-black/20 rounded-xl focus:border-black/50 focus:ring-2 focus:ring-black/10 transition-all duration-300 text-sm sm:text-base outline-none"
            placeholder="이름을 입력하세요"
            disabled={isSubmitting}
          />
          <p className="text-xs text-gray-500 mt-1 text-right">
            {name.length}/50
          </p>
        </div>

        {/* 메시지 입력 */}
        <div>
          <label htmlFor="message" className="block text-sm text-gray-700 mb-2 font-light">
            축하 메시지
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={500}
            rows={4}
            className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-black/20 rounded-xl focus:border-black/50 focus:ring-2 focus:ring-black/10 transition-all duration-300 text-sm sm:text-base resize-none outline-none"
            placeholder="따뜻한 축하 메시지를 남겨주세요"
            disabled={isSubmitting}
          />
          <p className="text-xs text-gray-500 mt-1 text-right">
            {message.length}/500
          </p>
        </div>

        {/* 제출 버튼 */}
        <button
          type="submit"
          disabled={isSubmitting || !name.trim() || !message.trim()}
          className="w-full py-3 sm:py-3.5 bg-gradient-to-r from-white to-[#fafafa] border border-black/30 rounded-xl text-sm sm:text-base text-black font-light hover:border-black/60 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
              등록 중...
            </span>
          ) : (
            '방명록에 남기기'
          )}
        </button>
      </form>

      {/* Toast Notification */}
      {toast.show && (
        <div
          className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-[60] px-6 py-3 rounded-full shadow-2xl backdrop-blur-md animate-fadeInUp ${toast.type === 'success'
              ? 'bg-black/90 text-white'
              : 'bg-red-500/90 text-white'
            }`}
        >
          <p className="text-sm font-light">{toast.message}</p>
        </div>
      )}
    </>
  )
}

export default GuestbookForm
