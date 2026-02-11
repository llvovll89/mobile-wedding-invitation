import { useEffect, useState } from 'react'
import { collection, query, orderBy, limit, onSnapshot, Timestamp, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'
import { User } from 'lucide-react'

interface GuestbookMessage {
  id: string
  name: string
  message: string
  createdAt: Timestamp
}

function GuestbookList() {
  const [messages, setMessages] = useState<GuestbookMessage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [displayLimit, setDisplayLimit] = useState(20)

  useEffect(() => {
    let unsubscribe: (() => void) | undefined

    const loadMessages = async () => {
      try {
        // 초기 로딩: getDocs로 빠르게 가져오기
        const q = query(
          collection(db, 'guestbook'),
          orderBy('createdAt', 'desc'),
          limit(displayLimit)
        )

        // 첫 로드는 getDocs로 빠르게
        const snapshot = await getDocs(q)
        const messagesData: GuestbookMessage[] = []
        snapshot.forEach((doc) => {
          messagesData.push({
            id: doc.id,
            ...doc.data(),
          } as GuestbookMessage)
        })
        setMessages(messagesData)
        setLoading(false)

        // 이후 실시간 업데이트는 onSnapshot으로
        unsubscribe = onSnapshot(
          q,
          (snapshot) => {
            const messagesData: GuestbookMessage[] = []
            snapshot.forEach((doc) => {
              messagesData.push({
                id: doc.id,
                ...doc.data(),
              } as GuestbookMessage)
            })
            setMessages(messagesData)
          },
          (error) => {
            console.error('방명록 실시간 업데이트 실패:', error)
          }
        )
      } catch (error) {
        console.error('Firebase 초기화 실패:', error)
        setError('Firebase 연결에 실패했습니다.')
        setLoading(false)
      }
    }

    loadMessages()

    // 컴포넌트 언마운트 시 구독 해제
    return () => {
      if (unsubscribe) {
        unsubscribe()
      }
    }
  }, [displayLimit])

  const formatDate = (timestamp: Timestamp) => {
    if (!timestamp || !timestamp.toDate) return ''
    const date = timestamp.toDate()
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    return `${year}.${month}.${day} ${hours}:${minutes}`
  }

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block w-8 h-8 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
        <p className="mt-4 text-sm text-gray-600">방명록을 불러오는 중...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-sm text-red-600">{error}</p>
        <p className="text-xs text-gray-500 mt-2">
          Firebase 설정을 확인해주세요.
        </p>
      </div>
    )
  }

  if (messages.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-4 opacity-30">✍️</div>
        <p className="text-sm text-gray-600">
          첫 번째 축하 메시지를 남겨주세요!
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {messages.map((msg, index) => (
        <div
          key={msg.id}
          className="group relative bg-gradient-to-br from-white via-white/95 to-gray-50/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-xl border border-black/10 hover:border-black/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl sm:rounded-3xl transition-opacity duration-300"></div>
          <div className="relative flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-gray-100 to-white rounded-full flex items-center justify-center border border-black/10 group-hover:border-black/20 transition-colors">
                <User className="w-4 h-4 sm:w-5 sm:h-5 text-black" strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm sm:text-base font-medium text-black">
                  {msg.name}
                </p>
                <p className="text-xs text-gray-500">
                  {formatDate(msg.createdAt)}
                </p>
              </div>
            </div>
          </div>
          <p className="relative text-sm sm:text-base text-gray-800 leading-relaxed whitespace-pre-wrap pl-10 sm:pl-12">
            {msg.message}
          </p>
        </div>
      ))}

      {messages.length === displayLimit && (
        <button
          onClick={() => setDisplayLimit(prev => prev + 20)}
          className="w-full py-3 bg-gradient-to-r from-white to-[#fafafa] border border-black/20 rounded-xl text-sm text-gray-700 hover:border-black/40 hover:shadow-lg transition-all duration-300"
        >
          더 보기 ({displayLimit}개 표시 중)
        </button>
      )}
    </div>
  )
}

export default GuestbookList
