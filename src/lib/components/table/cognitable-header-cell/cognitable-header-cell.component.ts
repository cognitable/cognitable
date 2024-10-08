import {Component, Input, OnInit} from '@angular/core';
import {TableHeader} from '../../../commons/models/table-header';
import {NgIf, NgStyle} from '@angular/common';
import {TableInstance} from '../../../commons/exportables/table-instance';

@Component({
  selector: 'cognitable-header-cell',
  standalone: true,
  imports: [
    NgIf,
    NgStyle
  ],
  templateUrl: './cognitable-header-cell.component.html',
  styleUrl: './cognitable-header-cell.component.css'
})
export class CognitableHeaderCellComponent implements OnInit {
  @Input()
  header: TableHeader | undefined;

  @Input()
  tableInstance: TableInstance | undefined;

  constructor() {
  }

  ngOnInit() {
  }

  clickAction() {
    if (this.header?.sort?.enabled) {
      this.sort();
    }
  }

  sort() {
    if (this.header?.sort?.enabled) {
      if (!this.header.sort.direction) {
        this.header.sort.direction = 'asc';
      } else if (this.header.sort.direction === 'asc') {
        this.header.sort.direction = 'desc';
      } else if (this.header.sort.direction === 'desc') {
        this.header.sort.direction = undefined;
      }
      this.tableInstance?.sort(this.header.field, this.header.sort.direction);
    }
  }
}
