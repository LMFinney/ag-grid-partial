import { Component } from '@angular/core';
import { ColDef, ICellRendererParams } from 'ag-grid-community';

import { Translation } from '../app.types';
import { DataService } from '../data.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent {
  rowData: Translation[];
  columnDefs: ColDef[];

  constructor(dataSvc: DataService) {
    this.rowData = dataSvc.getNameTranslations();
    this.columnDefs = [
      {
        headerName: 'English',
        field: 'english',
        cellRenderer: (params: ICellRendererParams) => `Hello ${params.value}`
      },
      {
        headerName: 'Spanish',
        field: 'spanish',
        cellRenderer: (params: ICellRendererParams) => `Hola ${params.value}`
      },
      {
        headerName: 'German',
        field: 'german',
        cellRenderer: (params: ICellRendererParams) => `Guten Tag ${params.value}`
      },
      {
        headerName: 'Russian',
        field: 'russian',
        cellRenderer: (params: ICellRendererParams) => `Привет ${params.value}`
      },
    ];

    // this.columnDefs = dataSvc.getLanguages().map(language => {
    //   return {
    //     headerName: language.name,
    //     field: language.name.toLowerCase(),
    //     cellRenderer: (params: ICellRendererParams) => `${language.greeting} ${params.value}`
    //   };
    // });
  }
}
