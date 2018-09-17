import { Injectable } from '@angular/core';

import { Language, Translation } from './app.types';

const nameTranslations: Translation[] = [
  { english: 'Eugene', spanish: 'Eugenio', german: 'Eugen', russian: 'Евгений' },
  { english: 'Mary', spanish: 'Maria', german: 'Maria', russian: 'Мария' },
  { english: 'Matthew', spanish: 'Mateo', german: 'Matthäus', russian: 'Матфей' },
  { english: 'Barbara', spanish: 'Bárbara', german: 'Barbara', russian: 'Барбара' },
  { english: 'John', spanish: 'Juan', german: 'Johann', russian: 'Иван' },
  { english: 'Martha', spanish: 'Marta', german: 'Marta', russian: 'Марта' },
];

const languages: Language[] = [
  {
    name: 'English',
    greeting: 'Hello'
  },
  {
    name: 'Spanish',
    greeting: 'Hola'
  },
  {
    name: 'German',
    greeting: 'Guten Tag'
  },
  {
    name: 'Russian',
    greeting: 'Привет'
  },
];

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getNameTranslations() {
    return [...nameTranslations];
  }

  getLanguages() {
    return [...languages];
  }
}
