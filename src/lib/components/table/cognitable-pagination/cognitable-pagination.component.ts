import {Component, Input} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {TableInstance} from '../../../commons/exportables/table-instance';

@Component({
  selector: 'lib-cognitable-pagination',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './cognitable-pagination.component.html',
  styleUrl: './cognitable-pagination.component.css'
})
export class CognitablePaginationComponent {
  @Input()
  tableInstance: TableInstance = new TableInstance();

  constructor() {
  }

  goToPage(page: any) {
    this.tableInstance?.changePagination(page);
  }

  nextPage() {
    if (this.tableInstance?.currentPage !== this.tableInstance?.totalPages) {
      this.goToPage((this.tableInstance?.currentPage ?? 0) + 1);
    }
  }

  previousPage() {
    if (this.tableInstance && this.tableInstance.currentPage > 1) {
      this.goToPage(this.tableInstance?.currentPage - 1);
    }
  }
}
