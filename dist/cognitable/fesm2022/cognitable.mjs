import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Input, ViewContainerRef, ViewChild, Output } from '@angular/core';
import { NgIf, NgClass, NgStyle, NgForOf } from '@angular/common';

class CognitableService {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: CognitableService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: CognitableService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: CognitableService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class TableBase {
    // Init
    afterTableInit = new EventEmitter();
    // Header
    tableHeaders;
    // Data
    tableData;
    // Backup
    backupData; // For backup the table data, so that additional processes won't be affecting it
    // Pagination
    paginationEnabled = false;
    allowedPageSizes = [10, 25, 50, 100];
    pageSize = 10;
    totalPages = 0;
    currentPage = 1;
    paginationButtons = [];
    // Cell Events
    cellContentClicked = new EventEmitter();
    cellContentHover = new EventEmitter();
    cellValueChanged = new EventEmitter();
    // Table Size
    height = 400;
    // Overlays
    loading = false;
    noData = false;
    loadingMessage;
    noDataMessage;
    constructor() { }
    changeCellValue(header, rowData, value) {
        rowData[header.field] = value;
        this.cellValueChanged.emit({
            header: header,
            rowData: rowData,
            value: value
        });
    }
    setBackupData(data) {
        this.backupData = JSON.parse(JSON.stringify(data ?? []));
    }
    sort(field, order) {
        if (!order) {
            this.tableData = JSON.parse(JSON.stringify(this.backupData ?? []));
        }
        else {
            this.tableData = this.tableData.sort((a, b) => {
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
    filter(filterValue, headers) {
        // this.backupData = (filterValue && !this.backupData?.length) ? this.setBackupData(this.tableData) : this.backupData; // Taking the backup of original data
        if (headers?.length) {
            this.filterBySpecifiedFields(headers, filterValue);
        }
        else {
            this.filterByAllFields(filterValue);
        }
    }
    filterByAllFields(filterValue) {
        const nonSearchableHeaders = this.tableHeaders?.filter(header => header?.search?.columnSearchIgnored); // Filtering the search not allowed column headers
        const nonSearchFields = nonSearchableHeaders?.map(header => header.field);
        let temporaryData = JSON.parse(JSON.stringify(this.backupData ?? []));
        temporaryData = temporaryData.filter((record) => {
            for (const recordField in (record ?? {})) {
                if (!nonSearchFields?.includes(recordField)) {
                    const value = record[recordField];
                    if (typeof value === 'string' && value?.length && value.toLowerCase().includes(filterValue.toLowerCase())) {
                        return true;
                    }
                }
            }
            return false;
        });
        this.tableData = temporaryData;
    }
    filterBySpecifiedFields(filterValue, headers) {
    }
    loadPagination() {
        if (this.paginationEnabled && this.backupData?.length) {
            this.totalPages = Math.ceil(this.pageSize && this.backupData.length ? this.backupData.length / this.pageSize : 0);
            this.changePagination(1);
        }
    }
    changePagination(page) {
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
    setLoading(loading) {
        this.loading = loading;
    }
    setNoData(noData) {
        this.noData = noData;
    }
}

class TableInstance extends TableBase {
    constructor() {
        super();
    }
}

class CognitablePaginationComponent {
    tableInstance = new TableInstance();
    constructor() {
    }
    goToPage(page) {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: CognitablePaginationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: CognitablePaginationComponent, isStandalone: true, selector: "lib-cognitable-pagination", inputs: { tableInstance: "tableInstance" }, ngImport: i0, template: "<div class=\"cognitable-pagination-container\">\n    <div class=\"cognitable-pagination-button-group\">\n        <div (click)=\"previousPage()\" class=\"cognitable-pagination-previous-button\">\n            <div class=\"cognitable-pagination-previous-button-content\">\n                <svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M9.04529 11.6383C8.92341 11.6383 8.80154 11.5977 8.72029 11.4961L4.12966 6.82422C3.94685 6.64141 3.94685 6.35703 4.12966 6.17422L8.72029 1.50234C8.9031 1.31953 9.18748 1.31953 9.37029 1.50234C9.5531 1.68516 9.5531 1.96953 9.37029 2.15234L5.10466 6.49922L9.3906 10.8461C9.57341 11.0289 9.57341 11.3133 9.3906 11.4961C9.26873 11.5773 9.16716 11.6383 9.04529 11.6383Z\" fill=\"#637381\"/>\n                </svg>\n            </div>\n        </div>\n        <div class=\"cognitable-pagination-label-button\" *ngIf=\"tableInstance!.currentPage <= 3 || tableInstance!.currentPage >= tableInstance!.totalPages - 2\">\n            <div class=\"cognitable-pagination-label-button-content\">\n                &nbsp;\n            </div>\n        </div>\n        <div (click)=\"goToPage(1)\" class=\"cognitable-pagination-number-button\" [ngClass]=\"{'active': tableInstance!.currentPage === 1}\" *ngIf=\"tableInstance!.totalPages > 0\">\n            <div class=\"cognitable-pagination-number-button-content\">\n                1\n            </div>\n        </div>\n        <div (click)=\"goToPage(2)\" class=\"cognitable-pagination-number-button\" [ngClass]=\"{'active': tableInstance!.currentPage === 2}\" *ngIf=\"tableInstance!.totalPages > 1 && tableInstance!.currentPage < (tableInstance!.pageSize / 2)\">\n            <div class=\"cognitable-pagination-number-button-content\">\n                2\n            </div>\n        </div>\n        <div class=\"cognitable-pagination-label-button\" *ngIf=\"tableInstance!.totalPages > 4 && tableInstance!.currentPage !== 3\">\n            <div class=\"cognitable-pagination-label-button-content\">\n                ..\n            </div>\n        </div>\n        <div class=\"cognitable-pagination-number-button active\" *ngIf=\"tableInstance!.totalPages > 4 && tableInstance!.currentPage > 2 && !([1, 2, tableInstance!.totalPages, tableInstance!.totalPages - 1].includes(tableInstance!.currentPage))\">\n            <div class=\"cognitable-pagination-number-button-content\">\n                {{tableInstance!.currentPage}}\n            </div>\n        </div>\n        <div class=\"cognitable-pagination-label-button\" *ngIf=\"tableInstance!.totalPages > 4 && tableInstance!.currentPage > 2 && tableInstance!.currentPage < tableInstance!.totalPages - 2\">\n            <div class=\"cognitable-pagination-label-button-content\">\n                ..\n            </div>\n        </div>\n        <div (click)=\"goToPage(tableInstance!.totalPages - 1)\" class=\"cognitable-pagination-number-button\" [ngClass]=\"{'active': tableInstance!.currentPage === tableInstance!.totalPages - 1}\" *ngIf=\"tableInstance!.totalPages > 1 && (tableInstance!.currentPage >= (tableInstance!.pageSize / 2) || tableInstance!.totalPages - 1 < 4) && !([1, 2].includes(tableInstance!.totalPages - 1))\">\n            <div class=\"cognitable-pagination-number-button-content\">\n                {{tableInstance!.totalPages - 1}}\n            </div>\n        </div>\n        <div (click)=\"goToPage(tableInstance!.totalPages)\" class=\"cognitable-pagination-number-button\"  [ngClass]=\"{'active': tableInstance!.currentPage === tableInstance!.totalPages}\" *ngIf=\"tableInstance!.totalPages && !([1, 2].includes(tableInstance!.totalPages))\">\n            <div class=\"cognitable-pagination-number-button-content\">\n                {{tableInstance!.totalPages}}\n            </div>\n        </div>\n        <div class=\"cognitable-pagination-label-button\" *ngIf=\"tableInstance!.currentPage < 3 || !(tableInstance!.currentPage <= tableInstance!.totalPages - 2)\">\n            <div class=\"cognitable-pagination-label-button-content\">\n                &nbsp;\n            </div>\n        </div>\n        <div (click)=\"nextPage()\" class=\"cognitable-pagination-next-button\">\n            <div class=\"cognitable-pagination-next-button-content\">\n                <svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M4.45466 11.6383C4.33279 11.6383 4.23123 11.5977 4.12966 11.5164C3.94685 11.3336 3.94685 11.0492 4.12966 10.8664L8.39529 6.49922L4.12966 2.15234C3.94685 1.96953 3.94685 1.68516 4.12966 1.50234C4.31248 1.31953 4.59685 1.31953 4.77966 1.50234L9.37029 6.17422C9.5531 6.35703 9.5531 6.64141 9.37029 6.82422L4.77966 11.4961C4.69841 11.5773 4.57654 11.6383 4.45466 11.6383Z\" fill=\"#637381\"/>\n                </svg>\n            </div>\n        </div>\n    </div>\n</div>\n", styles: [".cognitable-pagination-container{width:100%;display:flex;margin-top:15px;margin-bottom:15px;-moz-user-select:-moz-none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none;user-select:none}.cognitable-pagination-button-group{margin-left:auto;margin-right:15px;display:flex;gap:10px}.cognitable-pagination-button-group button{border-radius:4px}.cognitable-pagination-number-button{border:none;padding:10px;background:#f3f4f6;display:flex;align-items:center;justify-content:center;cursor:pointer;border-radius:4px}.cognitable-pagination-number-button:hover,.cognitable-pagination-number-button.active{background:#1e40ae;color:#fff}.cognitable-pagination-number-button-content{width:14px;height:14px;font-size:12px;text-align:center;line-height:15px}.cognitable-pagination-previous-button{border:none;padding:10px;background:#f3f4f6;display:flex;align-items:center;justify-content:center;cursor:pointer;border-radius:4px}.cognitable-pagination-previous-button-content{width:14px;height:14px}.cognitable-pagination-next-button{border:none;padding:10px;background:#f3f4f6;display:flex;align-items:center;justify-content:center;cursor:pointer;border-radius:4px}.cognitable-pagination-next-button-content{width:14px;height:14px}.cognitable-pagination-label-button{border:none;padding:10px;background:transparent;display:flex;align-items:center;justify-content:center;cursor:pointer;border-radius:4px}.cognitable-pagination-label-button-content{width:14px;height:14px}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: CognitablePaginationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-cognitable-pagination', standalone: true, imports: [
                        NgIf,
                        NgClass
                    ], template: "<div class=\"cognitable-pagination-container\">\n    <div class=\"cognitable-pagination-button-group\">\n        <div (click)=\"previousPage()\" class=\"cognitable-pagination-previous-button\">\n            <div class=\"cognitable-pagination-previous-button-content\">\n                <svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M9.04529 11.6383C8.92341 11.6383 8.80154 11.5977 8.72029 11.4961L4.12966 6.82422C3.94685 6.64141 3.94685 6.35703 4.12966 6.17422L8.72029 1.50234C8.9031 1.31953 9.18748 1.31953 9.37029 1.50234C9.5531 1.68516 9.5531 1.96953 9.37029 2.15234L5.10466 6.49922L9.3906 10.8461C9.57341 11.0289 9.57341 11.3133 9.3906 11.4961C9.26873 11.5773 9.16716 11.6383 9.04529 11.6383Z\" fill=\"#637381\"/>\n                </svg>\n            </div>\n        </div>\n        <div class=\"cognitable-pagination-label-button\" *ngIf=\"tableInstance!.currentPage <= 3 || tableInstance!.currentPage >= tableInstance!.totalPages - 2\">\n            <div class=\"cognitable-pagination-label-button-content\">\n                &nbsp;\n            </div>\n        </div>\n        <div (click)=\"goToPage(1)\" class=\"cognitable-pagination-number-button\" [ngClass]=\"{'active': tableInstance!.currentPage === 1}\" *ngIf=\"tableInstance!.totalPages > 0\">\n            <div class=\"cognitable-pagination-number-button-content\">\n                1\n            </div>\n        </div>\n        <div (click)=\"goToPage(2)\" class=\"cognitable-pagination-number-button\" [ngClass]=\"{'active': tableInstance!.currentPage === 2}\" *ngIf=\"tableInstance!.totalPages > 1 && tableInstance!.currentPage < (tableInstance!.pageSize / 2)\">\n            <div class=\"cognitable-pagination-number-button-content\">\n                2\n            </div>\n        </div>\n        <div class=\"cognitable-pagination-label-button\" *ngIf=\"tableInstance!.totalPages > 4 && tableInstance!.currentPage !== 3\">\n            <div class=\"cognitable-pagination-label-button-content\">\n                ..\n            </div>\n        </div>\n        <div class=\"cognitable-pagination-number-button active\" *ngIf=\"tableInstance!.totalPages > 4 && tableInstance!.currentPage > 2 && !([1, 2, tableInstance!.totalPages, tableInstance!.totalPages - 1].includes(tableInstance!.currentPage))\">\n            <div class=\"cognitable-pagination-number-button-content\">\n                {{tableInstance!.currentPage}}\n            </div>\n        </div>\n        <div class=\"cognitable-pagination-label-button\" *ngIf=\"tableInstance!.totalPages > 4 && tableInstance!.currentPage > 2 && tableInstance!.currentPage < tableInstance!.totalPages - 2\">\n            <div class=\"cognitable-pagination-label-button-content\">\n                ..\n            </div>\n        </div>\n        <div (click)=\"goToPage(tableInstance!.totalPages - 1)\" class=\"cognitable-pagination-number-button\" [ngClass]=\"{'active': tableInstance!.currentPage === tableInstance!.totalPages - 1}\" *ngIf=\"tableInstance!.totalPages > 1 && (tableInstance!.currentPage >= (tableInstance!.pageSize / 2) || tableInstance!.totalPages - 1 < 4) && !([1, 2].includes(tableInstance!.totalPages - 1))\">\n            <div class=\"cognitable-pagination-number-button-content\">\n                {{tableInstance!.totalPages - 1}}\n            </div>\n        </div>\n        <div (click)=\"goToPage(tableInstance!.totalPages)\" class=\"cognitable-pagination-number-button\"  [ngClass]=\"{'active': tableInstance!.currentPage === tableInstance!.totalPages}\" *ngIf=\"tableInstance!.totalPages && !([1, 2].includes(tableInstance!.totalPages))\">\n            <div class=\"cognitable-pagination-number-button-content\">\n                {{tableInstance!.totalPages}}\n            </div>\n        </div>\n        <div class=\"cognitable-pagination-label-button\" *ngIf=\"tableInstance!.currentPage < 3 || !(tableInstance!.currentPage <= tableInstance!.totalPages - 2)\">\n            <div class=\"cognitable-pagination-label-button-content\">\n                &nbsp;\n            </div>\n        </div>\n        <div (click)=\"nextPage()\" class=\"cognitable-pagination-next-button\">\n            <div class=\"cognitable-pagination-next-button-content\">\n                <svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M4.45466 11.6383C4.33279 11.6383 4.23123 11.5977 4.12966 11.5164C3.94685 11.3336 3.94685 11.0492 4.12966 10.8664L8.39529 6.49922L4.12966 2.15234C3.94685 1.96953 3.94685 1.68516 4.12966 1.50234C4.31248 1.31953 4.59685 1.31953 4.77966 1.50234L9.37029 6.17422C9.5531 6.35703 9.5531 6.64141 9.37029 6.82422L4.77966 11.4961C4.69841 11.5773 4.57654 11.6383 4.45466 11.6383Z\" fill=\"#637381\"/>\n                </svg>\n            </div>\n        </div>\n    </div>\n</div>\n", styles: [".cognitable-pagination-container{width:100%;display:flex;margin-top:15px;margin-bottom:15px;-moz-user-select:-moz-none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none;user-select:none}.cognitable-pagination-button-group{margin-left:auto;margin-right:15px;display:flex;gap:10px}.cognitable-pagination-button-group button{border-radius:4px}.cognitable-pagination-number-button{border:none;padding:10px;background:#f3f4f6;display:flex;align-items:center;justify-content:center;cursor:pointer;border-radius:4px}.cognitable-pagination-number-button:hover,.cognitable-pagination-number-button.active{background:#1e40ae;color:#fff}.cognitable-pagination-number-button-content{width:14px;height:14px;font-size:12px;text-align:center;line-height:15px}.cognitable-pagination-previous-button{border:none;padding:10px;background:#f3f4f6;display:flex;align-items:center;justify-content:center;cursor:pointer;border-radius:4px}.cognitable-pagination-previous-button-content{width:14px;height:14px}.cognitable-pagination-next-button{border:none;padding:10px;background:#f3f4f6;display:flex;align-items:center;justify-content:center;cursor:pointer;border-radius:4px}.cognitable-pagination-next-button-content{width:14px;height:14px}.cognitable-pagination-label-button{border:none;padding:10px;background:transparent;display:flex;align-items:center;justify-content:center;cursor:pointer;border-radius:4px}.cognitable-pagination-label-button-content{width:14px;height:14px}\n"] }]
        }], ctorParameters: () => [], propDecorators: { tableInstance: [{
                type: Input
            }] } });

class CognitableHeaderCellComponent {
    header;
    tableInstance;
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
            }
            else if (this.header.sort.direction === 'asc') {
                this.header.sort.direction = 'desc';
            }
            else if (this.header.sort.direction === 'desc') {
                this.header.sort.direction = undefined;
            }
            this.tableInstance?.sort(this.header.field, this.header.sort.direction);
        }
    }
    onCheck(event, field) {
        if (this.tableInstance) {
            this.tableInstance.tableData = (this.tableInstance?.tableData ?? []).map((data) => {
                data.checked = data.checked ?? {};
                data.checked[field] = event?.target?.checked ?? false;
                return data;
            });
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: CognitableHeaderCellComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: CognitableHeaderCellComponent, isStandalone: true, selector: "cognitable-header-cell", inputs: { header: "header", tableInstance: "tableInstance" }, ngImport: i0, template: "<div [style]=\"'height: 100%; display: flex; align-items: center;'\">\n  <div style=\"width: 20px; height: 100%; display: flex; align-items: center;\">\n    <div style=\"width: 15px; height: 15px;\">\n      <span *ngIf=\"header?.checkbox?.showInHeader\">\n        <input type=\"checkbox\" class=\"cognitable-header-checkbox\" (change)=\"onCheck($event, header?.field)\">\n      </span>\n      <span *ngIf=\"!header?.checkbox?.showInHeader\">&nbsp;</span>\n    </div>\n  </div>\n  <div class=\"cognitable-header-cell\" [style]=\"header?.styles?.headerCellStyles\" (click)=\"clickAction()\">\n    <div class=\"cognitable-header-cell-content\" [style]=\"header?.styles?.headerCellContentStyles\">{{header?.title}}</div>\n  </div>\n  <div style=\"width: 20px; height: 100%; display: flex; align-items: center; justify-content: center;\">\n\n    <!-- Sorting -->\n    <div style=\"width: 15px; height: 15px;\" *ngIf=\"header?.sort?.enabled\">\n      <div style=\"width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;\" *ngIf=\"header?.sort?.direction === 'asc'\">\n        <svg width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M4.0625 9.375L7.8125 5.625L11.5625 9.375\" stroke=\"black\" stroke-width=\"1.33333\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </svg>\n      </div>\n\n      <div style=\"width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;\" *ngIf=\"header?.sort?.direction === 'desc'\">\n        <svg width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M10.9375 5.625L7.1875 9.375L3.4375 5.625\" stroke=\"black\" stroke-width=\"1.33333\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </svg>\n      </div>\n    </div>\n    <!-- /Sorting -->\n\n  </div>\n</div>\n", styles: [".cognitable-header-cell{width:150px;display:flex;align-items:center;cursor:pointer}.cognitable-header-cell-content{width:100%;text-align:left;font-size:14px;font-weight:700;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cognitable-header-checkbox{margin-bottom:14px;width:14px;height:14px}.cognitable-header-checkbox:focus{outline:none!important;--tw-ring-color: none !important}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: CognitableHeaderCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cognitable-header-cell', standalone: true, imports: [
                        NgIf,
                        NgStyle
                    ], template: "<div [style]=\"'height: 100%; display: flex; align-items: center;'\">\n  <div style=\"width: 20px; height: 100%; display: flex; align-items: center;\">\n    <div style=\"width: 15px; height: 15px;\">\n      <span *ngIf=\"header?.checkbox?.showInHeader\">\n        <input type=\"checkbox\" class=\"cognitable-header-checkbox\" (change)=\"onCheck($event, header?.field)\">\n      </span>\n      <span *ngIf=\"!header?.checkbox?.showInHeader\">&nbsp;</span>\n    </div>\n  </div>\n  <div class=\"cognitable-header-cell\" [style]=\"header?.styles?.headerCellStyles\" (click)=\"clickAction()\">\n    <div class=\"cognitable-header-cell-content\" [style]=\"header?.styles?.headerCellContentStyles\">{{header?.title}}</div>\n  </div>\n  <div style=\"width: 20px; height: 100%; display: flex; align-items: center; justify-content: center;\">\n\n    <!-- Sorting -->\n    <div style=\"width: 15px; height: 15px;\" *ngIf=\"header?.sort?.enabled\">\n      <div style=\"width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;\" *ngIf=\"header?.sort?.direction === 'asc'\">\n        <svg width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M4.0625 9.375L7.8125 5.625L11.5625 9.375\" stroke=\"black\" stroke-width=\"1.33333\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </svg>\n      </div>\n\n      <div style=\"width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;\" *ngIf=\"header?.sort?.direction === 'desc'\">\n        <svg width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M10.9375 5.625L7.1875 9.375L3.4375 5.625\" stroke=\"black\" stroke-width=\"1.33333\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </svg>\n      </div>\n    </div>\n    <!-- /Sorting -->\n\n  </div>\n</div>\n", styles: [".cognitable-header-cell{width:150px;display:flex;align-items:center;cursor:pointer}.cognitable-header-cell-content{width:100%;text-align:left;font-size:14px;font-weight:700;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cognitable-header-checkbox{margin-bottom:14px;width:14px;height:14px}.cognitable-header-checkbox:focus{outline:none!important;--tw-ring-color: none !important}\n"] }]
        }], ctorParameters: () => [], propDecorators: { header: [{
                type: Input
            }], tableInstance: [{
                type: Input
            }] } });

class CellDataFormatterComponent {
    cellData;
    rowData;
    header;
    dataToDisplay;
    ngOnInit() {
        const formatter = this.header?.cellDataFormatter;
        if (formatter) {
            this.dataToDisplay = formatter(this.cellData, this.rowData, this.header);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: CellDataFormatterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: CellDataFormatterComponent, isStandalone: true, selector: "lib-cell-data-formatter", ngImport: i0, template: "<span [title]=\"dataToDisplay\">{{dataToDisplay}}</span>\n", styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: CellDataFormatterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-cell-data-formatter', standalone: true, imports: [], template: "<span [title]=\"dataToDisplay\">{{dataToDisplay}}</span>\n" }]
        }] });

class CognitableDataCellComponent {
    injector;
    viewContainerRef;
    componentRenderer;
    formatterComponent;
    header;
    cellData;
    rowData;
    tableInstance;
    constructor(injector, viewContainerRef) {
        this.injector = injector;
        this.viewContainerRef = viewContainerRef;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.initiateRenderer();
        this.initiateFormatter();
    }
    initiateRenderer() {
        if (this.componentRenderer && this.header?.renderer?.component) {
            this.componentRenderer.clear();
            const componentRef = this.componentRenderer.createComponent(this.header?.renderer?.component);
            if (componentRef?.instance) {
                // @ts-ignore
                componentRef.instance['tableInstance'] = this.tableInstance;
                // @ts-ignore
                componentRef.instance['additionalData'] = this.header?.renderer?.additionalData;
                // @ts-ignore
                componentRef.instance['header'] = this.header;
                // @ts-ignore
                componentRef.instance['rowData'] = this.rowData;
                // @ts-ignore
                componentRef.instance['cellData'] = this.cellData;
            }
        }
    }
    initiateFormatter() {
        if (this.formatterComponent && this.header?.cellDataFormatter && !this.header?.renderer?.component) {
            this.formatterComponent.clear();
            const componentRef = this.formatterComponent.createComponent(CellDataFormatterComponent);
            if (componentRef?.instance) {
                // @ts-ignore
                componentRef.instance['formatter'] = this.header.cellDataFormatter;
                // @ts-ignore
                componentRef.instance['header'] = this.header;
                // @ts-ignore
                componentRef.instance['rowData'] = this.rowData;
                // @ts-ignore
                componentRef.instance['cellData'] = this.cellData;
            }
        }
    }
    onCheck(event, field) {
        this.rowData['checked'] = this.rowData['checked'] ?? {};
        this.rowData.checked[field] = event?.target?.checked ?? false;
    }
    click() {
        this.tableInstance?.cellContentClicked.emit({
            header: this.header,
            data: this.cellData,
            rowData: this.rowData
        });
    }
    window = window;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: CognitableDataCellComponent, deps: [{ token: i0.Injector }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: CognitableDataCellComponent, isStandalone: true, selector: "cogintable-data-cell", inputs: { header: "header", cellData: "cellData", rowData: "rowData", tableInstance: "tableInstance" }, viewQueries: [{ propertyName: "componentRenderer", first: true, predicate: ["componentRenderer"], descendants: true, read: ViewContainerRef }, { propertyName: "formatterComponent", first: true, predicate: ["formatterComponent"], descendants: true, read: ViewContainerRef }], ngImport: i0, template: "<div style=\"display: flex; align-items: center;\">\n  <div style=\"width: 20px; height: 100%; display: flex; align-items: center;\">\n    <div style=\"width: 15px; height: 15px;\">\n      <span *ngIf=\"header?.checkbox?.showInCell && (\n        (header?.checkbox?.hideIfNoData && cellData) || (!header?.checkbox?.hideIfNoData && cellData) || (!header?.checkbox?.hideIfNoData && !cellData)\n      )\">\n        <input type=\"checkbox\" class=\"cognitable-cell-checkbox\" (change)=\"onCheck($event, header?.field)\" [checked]=\"rowData?.checked && header?.field && rowData?.checked[header?.field ?? '']\">\n      </span>\n      <span *ngIf=\"!header?.checkbox?.showInCell && (\n        header?.checkbox?.hideIfNoData && !cellData\n      )\">&nbsp;</span>\n    </div> <!-- Space for Checkbox, Numbers, Etc -->\n  </div>\n\n  <div class=\"cognitable-data-cell\" [style]=\"header?.styles?.cellStyles\">\n    <div class=\"cognitable-data-cell-content\" [style]=\"header?.styles?.cellContentStyles\" (click)=\"click()\">\n      <ng-container *ngIf=\"!header?.renderer?.component && !header?.cellDataFormatter\"><span [title]=\"cellData\">{{cellData}}</span></ng-container>\n      <ng-container *ngIf=\"header?.renderer?.component\" #componentRenderer></ng-container>\n      <ng-container *ngIf=\"header?.cellDataFormatter && !header?.renderer?.component\" #formatterComponent></ng-container>\n    </div>\n  </div>\n\n  <div style=\"width: 20px; height: 100%; display: flex; align-items: center;\">\n    <div style=\"width: 15px; height: 15px;\">&nbsp;</div> <!-- Space to sync with sort in the header, can be used for anything useful -->\n  </div>\n</div>\n", styles: [".cognitable-data-cell{width:150px;padding-top:10px;padding-bottom:10px;display:flex;align-items:center}.cognitable-data-cell-content{width:100%;text-align:left;font-size:14px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cognitable-cell-checkbox{margin-bottom:14px;width:14px;height:14px}.cognitable-cell-checkbox:focus{outline:none!important;--tw-ring-color: none !important}.cognitable-data-cell-content .cognitable-data-cell-content-tooltip{display:none;width:120px;background-color:#000;color:#fff;text-align:center;padding:5px 0;border-radius:6px;position:fixed;z-index:1}.cognitable-data-cell-content:hover .cognitable-data-cell-content-tooltip{display:block}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: CognitableDataCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cogintable-data-cell', standalone: true, imports: [
                        NgIf
                    ], template: "<div style=\"display: flex; align-items: center;\">\n  <div style=\"width: 20px; height: 100%; display: flex; align-items: center;\">\n    <div style=\"width: 15px; height: 15px;\">\n      <span *ngIf=\"header?.checkbox?.showInCell && (\n        (header?.checkbox?.hideIfNoData && cellData) || (!header?.checkbox?.hideIfNoData && cellData) || (!header?.checkbox?.hideIfNoData && !cellData)\n      )\">\n        <input type=\"checkbox\" class=\"cognitable-cell-checkbox\" (change)=\"onCheck($event, header?.field)\" [checked]=\"rowData?.checked && header?.field && rowData?.checked[header?.field ?? '']\">\n      </span>\n      <span *ngIf=\"!header?.checkbox?.showInCell && (\n        header?.checkbox?.hideIfNoData && !cellData\n      )\">&nbsp;</span>\n    </div> <!-- Space for Checkbox, Numbers, Etc -->\n  </div>\n\n  <div class=\"cognitable-data-cell\" [style]=\"header?.styles?.cellStyles\">\n    <div class=\"cognitable-data-cell-content\" [style]=\"header?.styles?.cellContentStyles\" (click)=\"click()\">\n      <ng-container *ngIf=\"!header?.renderer?.component && !header?.cellDataFormatter\"><span [title]=\"cellData\">{{cellData}}</span></ng-container>\n      <ng-container *ngIf=\"header?.renderer?.component\" #componentRenderer></ng-container>\n      <ng-container *ngIf=\"header?.cellDataFormatter && !header?.renderer?.component\" #formatterComponent></ng-container>\n    </div>\n  </div>\n\n  <div style=\"width: 20px; height: 100%; display: flex; align-items: center;\">\n    <div style=\"width: 15px; height: 15px;\">&nbsp;</div> <!-- Space to sync with sort in the header, can be used for anything useful -->\n  </div>\n</div>\n", styles: [".cognitable-data-cell{width:150px;padding-top:10px;padding-bottom:10px;display:flex;align-items:center}.cognitable-data-cell-content{width:100%;text-align:left;font-size:14px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cognitable-cell-checkbox{margin-bottom:14px;width:14px;height:14px}.cognitable-cell-checkbox:focus{outline:none!important;--tw-ring-color: none !important}.cognitable-data-cell-content .cognitable-data-cell-content-tooltip{display:none;width:120px;background-color:#000;color:#fff;text-align:center;padding:5px 0;border-radius:6px;position:fixed;z-index:1}.cognitable-data-cell-content:hover .cognitable-data-cell-content-tooltip{display:block}\n"] }]
        }], ctorParameters: () => [{ type: i0.Injector }, { type: i0.ViewContainerRef }], propDecorators: { componentRenderer: [{
                type: ViewChild,
                args: ['componentRenderer', { read: ViewContainerRef }]
            }], formatterComponent: [{
                type: ViewChild,
                args: ['formatterComponent', { read: ViewContainerRef }]
            }], header: [{
                type: Input
            }], cellData: [{
                type: Input
            }], rowData: [{
                type: Input
            }], tableInstance: [{
                type: Input
            }] } });

class CognitableComponent extends TableInstance {
    tableHeaders = [];
    tableData;
    paginationEnabled = false;
    allowedPageSizes = [10, 25, 50, 100];
    pageSize = 10;
    height = 400;
    loadingMessage = 'Loading...';
    noDataMessage = 'No Data';
    afterTableInit = new EventEmitter();
    cellContentClicked = new EventEmitter();
    cellContentHover = new EventEmitter();
    cellValueChanged = new EventEmitter();
    tableInstance = this;
    loading = false;
    noData = false;
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
    setTableHeaders(tableHeaders) {
        this.tableHeaders = tableHeaders ?? this.tableHeaders;
    }
    setTableData(tableData) {
        this.tableData = tableData ?? this.tableData;
        this.setBackupData(this.tableData);
        this.loadPagination();
    }
    initiatePagination() {
        if (this.paginationEnabled) {
            this.loadPagination();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: CognitableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: CognitableComponent, isStandalone: true, selector: "cognitable", inputs: { tableHeaders: "tableHeaders", tableData: "tableData", paginationEnabled: "paginationEnabled", allowedPageSizes: "allowedPageSizes", pageSize: "pageSize", height: "height", loadingMessage: "loadingMessage", noDataMessage: "noDataMessage" }, outputs: { afterTableInit: "afterTableInit", cellContentClicked: "cellContentClicked", cellContentHover: "cellContentHover", cellValueChanged: "cellValueChanged" }, usesInheritance: true, ngImport: i0, template: "<div class=\"cognitable-container\">\n    <div class=\"cognitable-table-container\">\n        <table class=\"cognitable\">\n            <thead class=\"cognitable-header-row\" style=\"height: 44px\">\n                <th class=\"cognitable-header-cell-container\" *ngFor=\"let header of tableHeaders\">\n                    <cognitable-header-cell [tableInstance]=\"tableInstance\" [header]=\"header\"></cognitable-header-cell>\n                </th>\n            </thead>\n            <tbody class=\"cognitable-data-body\" [style]=\"'height: ' + (height - 44) + 'px' \">\n\n                <div class=\"cognitable-table-overlay\" *ngIf=\"loading\">\n                    <div class=\"cognitable-table-loader-overlay\">\n                        {{loadingMessage}}\n                    </div>\n                </div>\n\n                <div class=\"cognitable-table-overlay\" *ngIf=\"noData\">\n                    <div class=\"cognitable-table-loader-overlay\">\n                        {{noDataMessage}}\n                    </div>\n                </div>\n\n                <tr class=\"cognitable-data-row\" *ngFor=\"let rowData of tableData; let i = index;\">\n                    <td *ngFor=\"let header of tableHeaders; let i = index;\">\n                        <cogintable-data-cell [tableInstance]=\"tableInstance\" [header]=\"header\" [cellData]=\"rowData[header.field]\" [rowData]=\"rowData\" *ngIf=\"!header.hidden\"></cogintable-data-cell>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n    <ng-container *ngIf=\"paginationEnabled\">\n        <lib-cognitable-pagination [tableInstance]=\"tableInstance\"></lib-cognitable-pagination>\n    </ng-container>\n</div>\n", styles: [".cognitable-container{width:100%;font-family:Arial,Helvetica,sans-serif;display:flex;flex-direction:column}.cognitable-table-container{width:100%;display:flex;overflow-x:auto;overflow-y:hidden}.cognitable{width:100%}.cognitable-header-row{display:block;width:100%;background:#f7f9fb;border-bottom:1px solid #CAD4E0;white-space:nowrap}.cognitable-header-cell-container{display:inline-block;height:100%}.cognitable-header-cell{min-width:150px;padding-top:10px;padding-bottom:10px}.cognitable-data-body{display:block;overflow-y:auto;overflow-x:hidden;width:100%;position:relative}.cognitable-data-row{width:100%;display:inline-block;border-bottom:1px solid #E1E7EF;position:relative}.cognitable-action-data-cell{position:absolute;right:0;top:0;bottom:0;margin:0;z-index:1}.cognitable-table-overlay{position:absolute;inset:0;width:100%;background:#fff;display:flex;align-items:center;justify-content:center}.cognitable-table-loader-overlay{border:1px solid #b1afaf;color:#393939;border-radius:5px;padding:2px 10px;font-size:14px}\n"], dependencies: [{ kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: CognitablePaginationComponent, selector: "lib-cognitable-pagination", inputs: ["tableInstance"] }, { kind: "component", type: CognitableHeaderCellComponent, selector: "cognitable-header-cell", inputs: ["header", "tableInstance"] }, { kind: "component", type: CognitableDataCellComponent, selector: "cogintable-data-cell", inputs: ["header", "cellData", "rowData", "tableInstance"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: CognitableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cognitable', standalone: true, imports: [
                        NgForOf,
                        NgStyle,
                        NgIf,
                        CognitablePaginationComponent,
                        CognitableHeaderCellComponent,
                        CognitableDataCellComponent
                    ], template: "<div class=\"cognitable-container\">\n    <div class=\"cognitable-table-container\">\n        <table class=\"cognitable\">\n            <thead class=\"cognitable-header-row\" style=\"height: 44px\">\n                <th class=\"cognitable-header-cell-container\" *ngFor=\"let header of tableHeaders\">\n                    <cognitable-header-cell [tableInstance]=\"tableInstance\" [header]=\"header\"></cognitable-header-cell>\n                </th>\n            </thead>\n            <tbody class=\"cognitable-data-body\" [style]=\"'height: ' + (height - 44) + 'px' \">\n\n                <div class=\"cognitable-table-overlay\" *ngIf=\"loading\">\n                    <div class=\"cognitable-table-loader-overlay\">\n                        {{loadingMessage}}\n                    </div>\n                </div>\n\n                <div class=\"cognitable-table-overlay\" *ngIf=\"noData\">\n                    <div class=\"cognitable-table-loader-overlay\">\n                        {{noDataMessage}}\n                    </div>\n                </div>\n\n                <tr class=\"cognitable-data-row\" *ngFor=\"let rowData of tableData; let i = index;\">\n                    <td *ngFor=\"let header of tableHeaders; let i = index;\">\n                        <cogintable-data-cell [tableInstance]=\"tableInstance\" [header]=\"header\" [cellData]=\"rowData[header.field]\" [rowData]=\"rowData\" *ngIf=\"!header.hidden\"></cogintable-data-cell>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n    <ng-container *ngIf=\"paginationEnabled\">\n        <lib-cognitable-pagination [tableInstance]=\"tableInstance\"></lib-cognitable-pagination>\n    </ng-container>\n</div>\n", styles: [".cognitable-container{width:100%;font-family:Arial,Helvetica,sans-serif;display:flex;flex-direction:column}.cognitable-table-container{width:100%;display:flex;overflow-x:auto;overflow-y:hidden}.cognitable{width:100%}.cognitable-header-row{display:block;width:100%;background:#f7f9fb;border-bottom:1px solid #CAD4E0;white-space:nowrap}.cognitable-header-cell-container{display:inline-block;height:100%}.cognitable-header-cell{min-width:150px;padding-top:10px;padding-bottom:10px}.cognitable-data-body{display:block;overflow-y:auto;overflow-x:hidden;width:100%;position:relative}.cognitable-data-row{width:100%;display:inline-block;border-bottom:1px solid #E1E7EF;position:relative}.cognitable-action-data-cell{position:absolute;right:0;top:0;bottom:0;margin:0;z-index:1}.cognitable-table-overlay{position:absolute;inset:0;width:100%;background:#fff;display:flex;align-items:center;justify-content:center}.cognitable-table-loader-overlay{border:1px solid #b1afaf;color:#393939;border-radius:5px;padding:2px 10px;font-size:14px}\n"] }]
        }], ctorParameters: () => [], propDecorators: { tableHeaders: [{
                type: Input
            }], tableData: [{
                type: Input
            }], paginationEnabled: [{
                type: Input
            }], allowedPageSizes: [{
                type: Input
            }], pageSize: [{
                type: Input
            }], height: [{
                type: Input
            }], loadingMessage: [{
                type: Input
            }], noDataMessage: [{
                type: Input
            }], afterTableInit: [{
                type: Output
            }], cellContentClicked: [{
                type: Output
            }], cellContentHover: [{
                type: Output
            }], cellValueChanged: [{
                type: Output
            }] } });

/*
 * Public API Surface of cognitable
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CognitableComponent, CognitableService, TableBase, TableInstance };
//# sourceMappingURL=cognitable.mjs.map
