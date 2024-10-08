import {TableHeader} from '../models/table-header';
import {EventEmitter} from '@angular/core';

export class TableBase {
    // Header
    public tableHeaders: TableHeader[] | undefined;

    // Data
    public tableData: any;

    // Backup
    public backupData: any; // For backup the table data, so that additional processes won't be affecting it

    // Pagination
    paginationEnabled: boolean = false;
    allowedPageSizes: number[] = [10, 25, 50, 100];
    pageSize: number = 10;
    totalPages = 0;
    currentPage = 1;
    paginationButtons: any[] = [];

    // Table Action Events
    public cellContentClicked = new EventEmitter();
    public cellContentHover = new EventEmitter();

    // Table Size
    height: number = 400;

    // Overlays
    loading: boolean = false;
    noData: boolean = false;
    loadingMessage!: string;
    noDataMessage!: string;

    constructor() { }

    setBackupData(data: any) {
        this.backupData = JSON.parse(JSON.stringify(data ?? []))
    }

    sort(field: string, order: string | undefined) {
        if (!order) {
            this.tableData = JSON.parse(JSON.stringify(this.backupData ?? []));
        } else {
            this.tableData = this.tableData.sort((a: any, b: any) => {
                if (a[field] < b[field]) {
                    return order === 'asc' ? -1 : 1;
                }
                if (a[field] > b[field]) {
                    return order === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }
    }

    filter(filterValue: any, headers?: TableHeader[]) {
        // this.backupData = (filterValue && !this.backupData?.length) ? this.setBackupData(this.tableData) : this.backupData; // Taking the backup of original data
        if (headers?.length) {
            this.filterBySpecifiedFields(headers, filterValue);
        } else {
            this.filterByAllFields(filterValue);
        }
    }

    filterByAllFields(filterValue: any) {
        const nonSearchableHeaders = this.tableHeaders?.filter(header => header?.search?.columnSearchIgnored); // Filtering the search not allowed column headers
        const nonSearchFields = nonSearchableHeaders?.map(header => header.field);
        let temporaryData = JSON.parse(JSON.stringify(this.backupData ?? []));
        temporaryData = temporaryData.filter(
            (record: any) => {
                for (const recordField in (record ?? {})) {
                    if (!nonSearchFields?.includes(recordField)) {
                        const value = record[recordField];
                        if (typeof value === 'string' && value?.length && value.toLowerCase().includes(filterValue.toLowerCase())) {
                            return true;
                        }
                    }
                }
                return false;
            }
        );
        this.tableData = temporaryData;
    }

    filterBySpecifiedFields(filterValue: any, headers?: TableHeader[]) {

    }

    loadPagination() {
        if (this.paginationEnabled && this.backupData?.length) {
            this.totalPages = Math.ceil(this.pageSize && this.backupData.length ? this.backupData.length / this.pageSize : 0);
            this.changePagination(1);
        }
    }

    changePagination(page: any) {
        this.currentPage = page;
        this.tableData = this.getCurrentPageData();
    }

    getCurrentPageData() {
        if (this.currentPage && this.pageSize && this.backupData?.length) {
            const pageStartIndex = (this.currentPage * this.pageSize) - this.pageSize;
            return this.backupData.slice(pageStartIndex, pageStartIndex + this.pageSize);
        }
        return [];
    }

    setLoading(loading: boolean) {
        this.loading = loading;
    }

    setNoData(loading: boolean) {
        this.loading = loading;
    }
}
