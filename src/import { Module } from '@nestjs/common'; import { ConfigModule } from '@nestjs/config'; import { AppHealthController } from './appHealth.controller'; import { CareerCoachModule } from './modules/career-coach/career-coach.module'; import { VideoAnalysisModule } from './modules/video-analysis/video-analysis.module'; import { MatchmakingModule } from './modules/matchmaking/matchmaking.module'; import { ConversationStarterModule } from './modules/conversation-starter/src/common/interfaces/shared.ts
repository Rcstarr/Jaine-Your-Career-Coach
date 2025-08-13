export type Tone = 'supportive' | 'direct' | 'enthusiastic' | 'neutral';
export interface LlmMessage { role: 'system'|'user'|'assistant'; content: string; }
export interface Paged<T> { items: T[]; total: number; page: number; pageSize: number; }
