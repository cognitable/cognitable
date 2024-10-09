import { TableHeader } from '../models/table-header';
export interface CellRenderer {
    header: TableHeader;
    cellData: any;
    additionalData?: any;
}
