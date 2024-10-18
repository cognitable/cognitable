import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TableHeader} from '../../../commons/models/table-header';

@Component({
  selector: 'lib-cell-data-formatter',
  standalone: true,
  imports: [],
  templateUrl: './cell-data-formatter.component.html',
  styleUrl: './cell-data-formatter.component.css'
})
export class CellDataFormatterComponent implements OnInit {
  cellData: any;
  rowData: any;
  header?: TableHeader;

  dataToDisplay: any;

  ngOnInit() {
    const formatter = this.header?.cellDataFormatter;
    if (formatter) {
      this.dataToDisplay = formatter(this.cellData, this.rowData, this.header);
    }
  }
}
