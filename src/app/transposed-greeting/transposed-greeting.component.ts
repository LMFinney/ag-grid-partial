import { Component } from '@angular/core';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import { partial } from 'lodash';

import { Language } from '../app.types';
import { DataService } from '../data.service';

@Component({
  selector: 'app-transposed-greeting',
  templateUrl: './transposed-greeting.component.html',
  styleUrls: ['./transposed-greeting.component.scss']
})
export class TransposedGreetingComponent {
  rowData = [
    {
      language: 'Spanish', eugene: 'Eugenio', mary: 'Maria', matthew: 'Mateo',
      barbara: 'Bárbara', john: 'Juan', martha: 'Marta'
    },
    {
      language: 'German', eugene: 'Eugen', mary: 'Maria', matthew: 'Matthäus',
      barbara: 'Barbara', john: 'Johann', martha: 'Marta'
    },
    {
      language: 'Russian', eugene: 'Евгений', mary: 'Мария', matthew: 'Матфей',
      barbara: 'Барбара', john: 'Иван', martha: 'Марта'
    },
  ];
  columnDefs: ColDef[];

  constructor(dataSvc: DataService) {
    const languages = dataSvc.getLanguages();

    this.columnDefs = [
      {
        headerName: '',
        field: 'language',
        cellStyle: { 'font-size': 'large' },
        pinned: 'left',
      },
      {
        headerName: 'Eugene',
        field: 'eugene',
        cellRenderer: (params: ICellRendererParams) => {
          const rowIndex = params.rowIndex;
          const language = languages[rowIndex + 1];
          return `${language.greeting} ${params.value}`;
        },
      },
      {
        headerName: 'Mary',
        field: 'mary',
        cellRenderer: (params: ICellRendererParams) => {
          // lots of duplication
          const rowIndex = params.rowIndex;
          const language = languages[rowIndex + 1];
          return `${language.greeting} ${params.value}`;
        },
      },
      {
        headerName: 'Matthew',
        field: 'matthew',
        cellRenderer: (params: ICellRendererParams) => {
          // better to extract, but still verbose
          return cellRenderer(languages, params);
        },
      },
      {
        headerName: 'Barbara',
        field: 'barbara',
        // further extraction
        cellRenderer: cellRenderer2(languages),
      },
      {
        headerName: 'John',
        field: 'john',
        // use partial application instead
        cellRenderer: partial(cellRenderer, languages),
      },
      {
        headerName: 'Martha',
        field: 'martha',
        cellRenderer: partial(cellRenderer, languages),
      },
    ];
  }
}

// the testable pure function that produces the rendered string
function cellRenderer(languages: Language[], params: ICellRendererParams) {
  const rowIndex = params.rowIndex;
  const language = languages[rowIndex + 1];
  return `${language.greeting} ${params.value}`;
}

// a function that returns a function that calls the function that does what we need
function cellRenderer2(languages: Language[]): (params: ICellRendererParams) => string {
  return (params: ICellRendererParams) => {
    return cellRenderer(languages, params);
  };
}

