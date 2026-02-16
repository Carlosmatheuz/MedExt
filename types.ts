export type Category = 
  | 'Saúde Coletiva'
  | 'Medicina de Família e Comunidade'
  | 'G.O'
  | 'Pediatria'
  | 'Cirurgia'
  | 'Clínica Médica'
  | 'CofBasics'
  | 'Saúde Mental';

export interface Topic {
  id: string;
  title: string;
  teacher: string;
  category: Category;
  originalLabel: string; // e.g., "1. Saúde Coletiva"
}

export interface Block {
  id: number;
  name: string;
  releaseDate: string; // DD/MM/YYYY
  topics: Topic[];
}

export interface StudyRecord {
  [topicId: string]: {
    studiedAt: string; // ISO Date string
    revision1Done: boolean;
    revision2Done: boolean;
    revision3Done: boolean;
  };
}
