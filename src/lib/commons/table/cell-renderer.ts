import {TableHeader} from '../models/table-header';
import {TableInstance} from '../exportables/table-instance';

export interface CellRenderer {
    tableInstance: TableInstance | undefined;
    header: TableHeader | undefined;
    rowData: any;
    cellData: any;
    additionalData?: any;
}