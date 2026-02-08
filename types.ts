
export interface Tip {
  title: string;
  description: string;
  icon: string;
  fullContent?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PetGuide {
  id: string;
  type: 'dog' | 'cat';
  title: string;
  content: string;
  image: string;
}
