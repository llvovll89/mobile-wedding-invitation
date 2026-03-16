export interface InvitationData {
  // settings에서 연동
  groomName: string;
  brideName: string;
  weddingDate: string; // YYYY-MM-DD

  // invitation config
  weddingTime: string; // HH:mm
  venueName: string;
  hallName: string;
  address: string;
  groomFatherName: string;
  groomMotherName: string;
  groomPhone: string;
  brideFatherName: string;
  brideMotherName: string;
  bridePhone: string;
  subway: string;
  bus: string;
  parking: string;
  groomBank: string;
  groomAccount: string;
  brideBank: string;
  brideAccount: string;
  templateId: '1' | '2' | '3';
  updatedAt?: string;
}

export const DEFAULT_INVITATION_DATA: InvitationData = {
  groomName: '신랑',
  brideName: '신부',
  weddingDate: '',
  weddingTime: '14:00',
  venueName: '장소명',
  hallName: '홀 이름',
  address: '',
  groomFatherName: '',
  groomMotherName: '',
  groomPhone: '',
  brideFatherName: '',
  brideMotherName: '',
  bridePhone: '',
  subway: '',
  bus: '',
  parking: '',
  groomBank: '',
  groomAccount: '',
  brideBank: '',
  brideAccount: '',
  templateId: '1',
};

export function formatWeddingDate(dateStr: string): string {
  if (!dateStr) return '0000년 00월 00일';
  const [y, m, d] = dateStr.split('-');
  return `${y}년 ${m}월 ${d}일`;
}

export function formatWeddingDateDot(dateStr: string): string {
  if (!dateStr) return '0000 · 00 · 00';
  const [y, m, d] = dateStr.split('-');
  return `${y} · ${m} · ${d}`;
}

export function formatWeddingTime(timeStr: string): string {
  if (!timeStr) return '오후 00시 00분';
  const [hStr, mStr] = timeStr.split(':');
  const h = parseInt(hStr, 10);
  const ampm = h >= 12 ? '오후' : '오전';
  const h12 = h > 12 ? h - 12 : h === 0 ? 12 : h;
  return `${ampm} ${String(h12).padStart(2, '0')}시 ${mStr}분`;
}

export function calcDDay(dateStr: string, timeStr: string): number {
  if (!dateStr) return 0;
  const [y, m, d] = dateStr.split('-').map(Number);
  const [h, min] = timeStr ? timeStr.split(':').map(Number) : [14, 0];
  const weddingDate = new Date(y, m - 1, d, h, min, 0);
  const diff = weddingDate.getTime() - new Date().getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
