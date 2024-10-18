import { OnInit } from '@angular/core';
import { TableHeader } from '../../../commons/models/table-header';
import * as i0 from "@angular/core";
export declare class CellDataFormatterComponent implements OnInit {
    cellData: any;
    rowData: any;
    header?: TableHeader;
    dataToDisplay: any;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CellDataFormatterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CellDataFormatterComponent, "lib-cell-data-formatter", never, {}, {}, never, never, true, never>;
}
