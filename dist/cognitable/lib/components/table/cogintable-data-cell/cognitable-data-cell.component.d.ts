import { AfterViewInit, Injector, OnInit, ViewContainerRef } from '@angular/core';
import { TableHeader } from '../../../commons/models/table-header';
import { TableInstance } from '../../../commons/exportables/table-instance';
import * as i0 from "@angular/core";
export declare class CognitableDataCellComponent implements OnInit, AfterViewInit {
    private injector;
    private viewContainerRef;
    componentRenderer: ViewContainerRef;
    formatterComponent: ViewContainerRef;
    header: TableHeader | undefined;
    cellData: any;
    rowData: any;
    tableInstance: TableInstance | undefined;
    constructor(injector: Injector, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    initiateRenderer(): void;
    initiateFormatter(): void;
    click(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CognitableDataCellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CognitableDataCellComponent, "cogintable-data-cell", never, { "header": { "alias": "header"; "required": false; }; "cellData": { "alias": "cellData"; "required": false; }; "rowData": { "alias": "rowData"; "required": false; }; "tableInstance": { "alias": "tableInstance"; "required": false; }; }, {}, never, never, true, never>;
}
