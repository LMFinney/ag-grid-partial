export interface Translation {
  english: string;
  spanish: string;
  german: string;
  russian: string;
}

export interface Language {
  name: string;
  greeting: string;
}

export interface TransposedRow {
  language: string;
  [index: string]: string;
}
