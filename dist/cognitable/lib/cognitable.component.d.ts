import { EventEmitter } from '@angular/core';
import { TableHeader } from './commons/models/table-header';
import { TableInstance } from './commons/exportables/table-instance';
import * as i0 from "@angular/core";
export declare class CognitableComponent extends TableInstance {
    tableHeaders: Array<TableHeader>;
    tableData: any;
    paginationEnabled: boolean;
    allowedPageSizes: number[];
    pageSize: number;
    height: number;
    loadingMessage: string;
    noDataMessage: string;
    cellContentClicked: EventEmitter<any>;
    cellContentHover: EventEmitter<any>;
    tableInstance: TableInstance;
    constructor();
    init(): void;
    setTableHeaders(tableHeaders?: TableHeader[]): void;
    setTableData(tableData?: any): void;
    private initiatePagination;
    static ɵfac: i0.ɵɵFactoryDeclaration<CognitableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CognitableComponent, "cognitable", never, { "tableHeaders": { "alias": "tableHeaders"; "required": false; }; "tableData": { "alias": "tableData"; "required": false; }; "paginationEnabled": { "alias": "paginationEnabled"; "required": false; }; "allowedPageSizes": { "alias": "allowedPageSizes"; "required": false; }; "pageSize": { "alias": "pageSize"; "required": false; }; "height": { "alias": "height"; "required": false; }; "loadingMessage": { "alias": "loadingMessage"; "required": false; }; "noDataMessage": { "alias": "noDataMessage"; "required": false; }; }, { "cellContentClicked": "cellContentClicked"; "cellContentHover": "cellContentHover"; }, never, never, true, never>;
}
