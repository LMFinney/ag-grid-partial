import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

import { Translation } from '../app.types';
import { DataService } from '../data.service';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent {
  rowData: Translation[];
  columnDefs: ColDef[];
  constructor(dataSvc: DataService) {
    this.rowData = dataSvc.getNameTranslations();
    this.columnDefs = [
      {
        headerName: 'English',
        field: 'english'
      },
      {
        headerName: 'Spanish',
        field: 'spanish'
      },
      {
        headerName: 'German',
        field: 'german'
      },
      {
        headerName: 'Russian',
        field: 'russian'
      },
    ];
  }
}
