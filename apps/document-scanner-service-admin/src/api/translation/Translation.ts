export type Translation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  originalText: string | null;
  translatedText: string | null;
  targetLanguage: string | null;
};
