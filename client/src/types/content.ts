export interface GameSave {
  id: string;
  slug: string;
  title: string;
  date: string;
  game: string;
  excerpt: string;
  image?: string;
  tags?: string[];
  content: string;
}

export interface Diary {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
  content: string;
}

