import { useState } from 'react'
import type { InvitationData } from '../types/invitation'

interface AccountInfoProps {
  data: InvitationData
}

function AccountInfo({ data }: AccountInfoProps) {
  const [isGroomOpen, setIsGroomOpen] = useState(false)
  const [isBrideOpen, setIsBrideOpen] = useState(false)

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${label} 계좌번호가 복사되었습니다.`)
    })
  }

  const hasGroomAccount = data.groomBank || data.groomAccount
  const hasBrideAccount = data.brideBank || data.brideAccount

  if (!hasGroomAccount && !hasBrideAccount) return null

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#f5f5f5] to-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-block">
            <p className="text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] text-black uppercase font-serif-en mb-2">Gift</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black mb-4">마음 전하실 곳</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-8 sm:w-10 h-[1px] bg-gradient-to-r from-transparent via-black to-gray-700"></div>
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-black animate-sparkle"></div>
              <div className="w-8 sm:w-10 h-[1px] bg-gradient-to-l from-transparent via-black to-gray-700"></div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <div className="inline-block bg-white/50 backdrop-blur-md rounded-full px-5 sm:px-6 py-2.5 sm:py-3 shadow-lg border border-black/20">
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light">
              참석이 어려우신 분들을 위해 계좌번호를 기재하였습니다.
              <br />
              <span className="text-black">축하의 마음 감사히 받겠습니다 ✨</span>
            </p>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {/* 신랑측 */}
          {hasGroomAccount && (
            <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-black/30">
              <button
                onClick={() => setIsGroomOpen(!isGroomOpen)}
                className="w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-white to-[#fafafa] hover:from-[#fafafa] hover:to-white transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-black/30">
                    <span className="text-xl sm:text-2xl">🤵</span>
                  </div>
                  <span className="font-medium text-black text-base sm:text-lg">신랑측 계좌번호</span>
                </div>
                <svg className={`w-5 h-5 sm:w-6 sm:h-6 text-black transition-transform duration-300 ${isGroomOpen ? 'rotate-180' : ''}`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {isGroomOpen && (
                <div className="p-5 sm:p-6 bg-gradient-to-br from-white to-[#f5f5f5] space-y-4 border-t border-black/20">
                  <div className="bg-gradient-to-br from-white to-[#fafafa] backdrop-blur-sm rounded-xl p-5 border border-black/30 hover:border-black/60 hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-xs text-black mb-1 tracking-wide">신랑</p>
                        <p className="font-medium text-black text-lg">{data.groomName}</p>
                      </div>
                      <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center border border-black/30">
                        <span className="text-xl">💰</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {data.groomBank && (
                        <div className="bg-gradient-to-r from-[#f5f5f5] to-[#fafafa] rounded-lg p-3 border border-black/20">
                          <p className="text-xs text-black mb-1">은행</p>
                          <p className="text-sm text-black font-medium">{data.groomBank}</p>
                        </div>
                      )}
                      {data.groomAccount && (
                        <div className="bg-gradient-to-r from-[#f5f5f5] to-[#fafafa] rounded-lg p-3 border border-black/20">
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex-1">
                              <p className="text-xs text-black mb-1">계좌번호</p>
                              <p className="text-sm font-mono text-black">{data.groomAccount}</p>
                            </div>
                            <button
                              onClick={() => copyToClipboard(data.groomAccount, '신랑')}
                              className="px-4 py-2 bg-gradient-to-r from-black to-gray-800 text-white text-xs rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-medium min-h-[36px]"
                            >
                              복사
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 신부측 */}
          {hasBrideAccount && (
            <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-black/30">
              <button
                onClick={() => setIsBrideOpen(!isBrideOpen)}
                className="w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-white to-[#fafafa] hover:from-[#fafafa] hover:to-white transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-black/30">
                    <span className="text-xl sm:text-2xl">👰</span>
                  </div>
                  <span className="font-medium text-black text-base sm:text-lg">신부측 계좌번호</span>
                </div>
                <svg className={`w-5 h-5 sm:w-6 sm:h-6 text-black transition-transform duration-300 ${isBrideOpen ? 'rotate-180' : ''}`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {isBrideOpen && (
                <div className="p-5 sm:p-6 bg-gradient-to-br from-white to-[#f5f5f5] space-y-4 border-t border-black/20">
                  <div className="bg-gradient-to-br from-white to-[#fafafa] backdrop-blur-sm rounded-xl p-5 border border-black/30 hover:border-black/60 hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-xs text-black mb-1 tracking-wide">신부</p>
                        <p className="font-medium text-black text-lg">{data.brideName}</p>
                      </div>
                      <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center border border-black/30">
                        <span className="text-xl">💰</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {data.brideBank && (
                        <div className="bg-gradient-to-r from-[#f5f5f5] to-[#fafafa] rounded-lg p-3 border border-black/20">
                          <p className="text-xs text-black mb-1">은행</p>
                          <p className="text-sm text-black font-medium">{data.brideBank}</p>
                        </div>
                      )}
                      {data.brideAccount && (
                        <div className="bg-gradient-to-r from-[#f5f5f5] to-[#fafafa] rounded-lg p-3 border border-black/20">
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex-1">
                              <p className="text-xs text-black mb-1">계좌번호</p>
                              <p className="text-sm font-mono text-black">{data.brideAccount}</p>
                            </div>
                            <button
                              onClick={() => copyToClipboard(data.brideAccount, '신부')}
                              className="px-4 py-2 bg-gradient-to-r from-black to-gray-800 text-white text-xs rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-medium min-h-[36px]"
                            >
                              복사
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-16 sm:mt-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
            <div className="w-10 sm:w-12 h-[1px] bg-gradient-to-r from-transparent via-black to-gray-700"></div>
            <div className="text-xl sm:text-2xl">⭐</div>
            <div className="w-10 sm:w-12 h-[1px] bg-gradient-to-l from-transparent via-black to-gray-700"></div>
          </div>
          <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-lg border border-black/20 inline-block">
            <p className="text-xs sm:text-sm text-gray-700 leading-loose font-light">
              소중한 당신을 초대합니다
              <br />
              <br />
              <span className="text-black text-sm sm:text-base">감사합니다 ♥</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AccountInfo
