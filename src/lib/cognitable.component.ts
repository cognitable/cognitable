import {AfterViewInit, Component, EventEmitter, Input, Output} from '@angular/core';
import {TableHeader} from './commons/models/table-header';
import {NgForOf, NgIf, NgStyle} from '@angular/common';
import {TableInstance} from './commons/exportables/table-instance';
import {CognitablePaginationComponent} from './components/table/cognitable-pagination/cognitable-pagination.component';
import {
  CognitableHeaderCellComponent
} from './components/table/cognitable-header-cell/cognitable-header-cell.component';
import {
  CognitableDataCellComponent
} from './components/table/cogintable-data-cell/cognitable-data-cell.component';

@Component({
  selector: 'cognitable',
  standalone: true,
  imports: [
    NgForOf,
    NgStyle,
    NgIf,
    CognitablePaginationComponent,
    CognitableHeaderCellComponent,
    CognitableDataCellComponent
  ],
  templateUrl: './cognitable.component.html',
  styleUrl: './cognitable.component.scss'
})
export class CognitableComponent extends TableInstance implements AfterViewInit {
  @Input()
  override tableHeaders: Array<TableHeader> = [];

  @Input()
  declare tableData: any;

  @Input()
  override paginationEnabled: boolean = false;

  @Input()
  override allowedPageSizes: number[] = [10, 25, 50, 100];

  @Input()
  override pageSize: number = 10;

  @Input()
  override height = 400;

  @Input()
  override loadingMessage: string = 'Loading...';

  @Input()
  override noDataMessage: string = 'No Data';

  @Output()
  override afterTableInit = new EventEmitter<TableInstance>();

  @Output()
  override cellContentClicked = new EventEmitter();

  @Output()
  override cellContentHover = new EventEmitter();

  @Output()
  override cellValueChanged = new EventEmitter();

  public tableInstance: TableInstance = this;

  override loading: boolean = false;
  override noData: boolean = false;

  constructor() {
    super();
    setTimeout(() => {
      this.init();
    }, 100);
  }

  ngAfterViewInit() {
    this.afterTableInit.emit(this);
  }

  init() {
    this.setTableHeaders();
    this.setTableData();
    this.setBackupData(this.tableData);
    this.initiatePagination();
  }

  public setTableHeaders(tableHeaders?: TableHeader[]) {
    this.tableHeaders = tableHeaders ?? this.tableHeaders;
  }

  public setTableData(tableData?: any) {
    this.tableData = tableData ?? this.tableData;
    this.setBackupData(this.tableData);
    this.loadPagination();
  }

  private initiatePagination() {
    if (this.paginationEnabled) {
      this.loadPagination();
    }
  }
}
