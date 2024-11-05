export interface TableHeader {
    /**
     * title will be displayed in the table headers
     */
    title: string;
    /**
     * field will be unique, which will be used to fetch data from the payload
     */
    field: string;
    /**
     * Optional type: TEXT
     * DROPDOWN Type will need a dropdown data
     */
    type?: undefined | 'TEXT' | 'NUMBER' | 'DATE' | 'DROPDOWN';
    /**
     * css styles for cells
     */
    styles?: {
        headerCellStyles?: any;
        headerCellContentStyles?: any;
        cellStyles?: any;
        cellContentStyles?: any;
    };
    /**
     * css styles for cells
     */
    hidden?: boolean;
    /**
     * to sort the data
     */
    sort?: {
        enabled?: boolean;
        direction?: 'asc' | 'desc';
    };
    /**
     * to apply filters
     */
    search?: {
        /**
         * If we enable this, a search bar will appear on  top of the table, and the user can filter the data with the values in the data
         */
        individualColumnSearchEnabled?: boolean;
        /**
         * If we enable this, this field will be ignored on any filtering but the individual one
         */
        columnSearchIgnored?: boolean;
        /**
         * Expected values are
         */
        searchType?: 'EQUALS' | 'NOT EQUALS' | 'IN' | 'NOT IN' | 'GREATER THAN' | 'NOT GREATER THAN' | 'LESS THAN' | 'NOT LESS THAN';
    };
    /**
     * To render another component inside a cell
     */
    renderer?: {
        componentName?: string;
        component?: any;
        additionalData?: any;
    };
    /**
     * Dropdown additional Data
     */
    dropdown?: {
        items?: {
            value?: any;
            label?: string;
            style?: any;
        }[];
        selectedItem?: any;
        containerStyles?: any;
    };
    /**
     * To format how we see the cell data
     */
    cellDataFormatter?: (cellData: any, rowData?: any, header?: TableHeader) => any;
    /**
     * To show checkbox in the column
     */
    checkbox?: {
        showInCell?: boolean;
        showInHeader?: boolean;
    };
}
