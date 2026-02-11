import { useState } from 'react'
import { PenLine } from 'lucide-react'
import GuestbookForm from './GuestbookForm'
import GuestbookList from './GuestbookList'

function Guestbook() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#f5f5f5] to-white">
      <div className="max-w-3xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block">
            <p className="text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] text-black uppercase font-serif-en mb-2">
              Guestbook
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black mb-4">
              방명록
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light mt-4">
              축하의 마음을 전해주세요
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-8 sm:w-10 h-[1px] bg-gradient-to-r from-transparent via-black to-gray-700"></div>
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-black animate-sparkle"></div>
              <div className="w-8 sm:w-10 h-[1px] bg-gradient-to-l from-transparent via-black to-gray-700"></div>
            </div>
          </div>
        </div>

        {/* 작성 버튼 / 폼 */}
        <div className="mb-8 sm:mb-12">
          {!isFormOpen ? (
            <button
              onClick={() => setIsFormOpen(true)}
              className="group relative w-full py-4 bg-gradient-to-br from-white via-white/95 to-gray-50 border border-black/20 rounded-3xl text-sm sm:text-base text-black font-light hover:border-black/40 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-2">
                <PenLine className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                축하 메시지 남기기
              </span>
            </button>
          ) : (
            <div className="relative bg-gradient-to-br from-white/90 via-white/85 to-gray-50/80 backdrop-blur-xl rounded-3xl shadow-2xl p-5 sm:p-6 md:p-8 border border-black/20">
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent rounded-3xl"></div>
              <div className="relative flex items-center justify-between mb-6">
                <h3 className="text-lg sm:text-xl font-light text-black">
                  축하 메시지 작성
                </h3>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="text-gray-500 hover:text-black transition-colors text-2xl w-8 h-8 flex items-center justify-center"
                  aria-label="닫기"
                >
                  ×
                </button>
              </div>
              <GuestbookForm
                onSuccess={() => {
                  setTimeout(() => {
                    setIsFormOpen(false)
                  }, 1500)
                }}
              />
            </div>
          )}
        </div>

        {/* 방명록 목록 */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-black/20"></div>
            <p className="text-xs sm:text-sm text-gray-600 font-light">
              방명록 목록
            </p>
            <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-black/20"></div>
          </div>
          <GuestbookList />
        </div>
      </div>
    </section>
  )
}

export default Guestbook
