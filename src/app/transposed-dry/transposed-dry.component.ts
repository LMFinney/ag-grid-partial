import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

import { DataService } from '../data.service';

@Component({
  selector: 'app-transposed-dry',
  templateUrl: './transposed-dry.component.html',
  styleUrls: ['./transposed-dry.component.scss']
})
export class TransposedDryComponent {
  rowData: {}[];
  columnDefs: ColDef[];

  constructor(dataSvc: DataService) {
    const nameTranslations = dataSvc.getNameTranslations();

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

    // use map, spread, and push to populate the rest of the columns
    this.columnDefs.push(...nameTranslations.map(translation => {
      return {
        headerName: translation.english,
        field: translation.english.toLowerCase(),
      };
    }));
  }

}
