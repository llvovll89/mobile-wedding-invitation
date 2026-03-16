import { db } from './config';
import { doc, getDoc } from 'firebase/firestore';
import type { InvitationData } from '../types/invitation';

export async function fetchInvitationData(uid: string): Promise<InvitationData | null> {
  const snap = await getDoc(doc(db, 'invitations', uid));
  if (!snap.exists()) return null;
  return snap.data() as InvitationData;
}
