import { OnInit } from '@angular/core';
import { TableHeader } from '../../../commons/models/table-header';
import { TableInstance } from '../../../commons/exportables/table-instance';
import * as i0 from "@angular/core";
export declare class CognitableHeaderCellComponent implements OnInit {
    header: TableHeader | undefined;
    tableInstance: TableInstance | undefined;
    constructor();
    ngOnInit(): void;
    clickAction(): void;
    sort(): void;
    onCheck(event: any, field: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CognitableHeaderCellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CognitableHeaderCellComponent, "cognitable-header-cell", never, { "header": { "alias": "header"; "required": false; }; "tableInstance": { "alias": "tableInstance"; "required": false; }; }, {}, never, never, true, never>;
}
