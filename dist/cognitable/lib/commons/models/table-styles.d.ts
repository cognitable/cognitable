export interface TableStyles {
    table?: any;
    header?: {
        row?: any;
        cell?: any;
        cellContent?: any;
    };
    data?: {
        body?: any;
        row?: any;
        cell?: any;
        cellContent?: any;
    };
    pagination?: {
        container?: any;
        pageNavigationButtonGroup?: any;
        button?: any;
        buttonContent?: any;
        nextButton?: any;
        nextButtonContent?: any;
        prevButton?: any;
        prevButtonContent?: any;
        pageSizeSelector?: string;
    };
}
