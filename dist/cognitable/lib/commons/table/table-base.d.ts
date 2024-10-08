import { TableHeader } from '../models/table-header';
import { EventEmitter } from '@angular/core';
export declare class TableBase {
    afterTableInit: EventEmitter<any>;
    tableHeaders: TableHeader[] | undefined;
    tableData: any;
    backupData: any;
    paginationEnabled: boolean;
    allowedPageSizes: number[];
    pageSize: number;
    totalPages: number;
    currentPage: number;
    paginationButtons: any[];
    cellContentClicked: EventEmitter<any>;
    cellContentHover: EventEmitter<any>;
    cellValueChanged: EventEmitter<any>;
    height: number;
    loading: boolean;
    noData: boolean;
    loadingMessage: string;
    noDataMessage: string;
    constructor();
    changeCellValue(header: TableHeader, rowData: any, value: any): void;
    setBackupData(data: any): void;
    sort(field: string, order: string | undefined): void;
    filter(filterValue: any, headers?: TableHeader[]): void;
    filterByAllFields(filterValue: any): void;
    filterBySpecifiedFields(filterValue: any, headers?: TableHeader[]): void;
    loadPagination(): void;
    changePagination(page: any): void;
    getCurrentPageData(): any;
    setLoading(loading: boolean): void;
    setNoData(noData: boolean): void;
}
