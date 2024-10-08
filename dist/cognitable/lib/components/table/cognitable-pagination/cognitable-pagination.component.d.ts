import { TableInstance } from '../../../commons/exportables/table-instance';
import * as i0 from "@angular/core";
export declare class CognitablePaginationComponent {
    tableInstance: TableInstance;
    constructor();
    goToPage(page: any): void;
    nextPage(): void;
    previousPage(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CognitablePaginationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CognitablePaginationComponent, "lib-cognitable-pagination", never, { "tableInstance": { "alias": "tableInstance"; "required": false; }; }, {}, never, never, true, never>;
}
