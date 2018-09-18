import { Component, OnInit } from '@angular/core';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import { partial } from 'lodash';

import { Language, TransposedRow } from '../app.types';
import { DataService } from '../data.service';

@Component({
  selector: 'app-transposed-greeting-dry',
  templateUrl: './transposed-greeting-dry.component.html',
  styleUrls: ['./transposed-greeting-dry.component.scss']
})
export class TransposedGreetingDryComponent {
  rowData: TransposedRow[];
  columnDefs: ColDef[];

  constructor(dataSvc: DataService) {
    const nameTranslations = dataSvc.getNameTranslations();
    const languages = dataSvc.getLanguages();

    this.rowData = dataSvc.getLanguages()
      .filter((_, index) => index > 0) // we don't show english - it's the header
      .map(language => {
        const lowerLang = language.name.toLowerCase();
        // add a special column for the language name
        const langValues = {
          language: language.name,
        };
        // use forEach to populate the row from the root data
        nameTranslations.forEach(translation => {
          langValues[translation.english.toLowerCase()] = translation[lowerLang];
        });
        return langValues;
      });

    // add a special column for the language name
    this.columnDefs = [
      {
        headerName: '',
        field: 'language',
        cellStyle: { 'font-size': 'large' },
        pinned: 'left',
      }
    ];

    const cellRenderer = partial(cellRendererFn, languages);
    // use map, spread, and push to populate the rest of the columns
    this.columnDefs.push(...nameTranslations.map(translation => {
      return {
        headerName: translation.english,
        field: translation.english.toLowerCase(),
        cellRenderer
      };
    }));
  }

}

function cellRendererFn(languages: Language[], params: ICellRendererParams) {
  const rowIndex = params.rowIndex;
  const language = languages[rowIndex + 1];
  return `${language.greeting} ${params.value}`;
}
