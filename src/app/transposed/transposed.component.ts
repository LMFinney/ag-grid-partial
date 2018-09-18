import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-transposed',
  templateUrl: './transposed.component.html',
  styleUrls: ['./transposed.component.scss']
})
export class TransposedComponent {
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

  columnDefs: ColDef[] = [
    {
      headerName: '',
      field: 'language',
      cellStyle: { 'font-size': 'large'},
      pinned: 'left',
    },
    {
      headerName: 'Eugene',
      field: 'eugene',
    },
    {
      headerName: 'Mary',
      field: 'mary',
    },
    {
      headerName: 'Matthew',
      field: 'matthew',
    },
    {
      headerName: 'Barbara',
      field: 'barbara',
    },
    {
      headerName: 'John',
      field: 'john',
    },
    {
      headerName: 'Martha',
      field: 'martha',
    },
  ];

}
