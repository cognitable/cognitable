import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class CellDataFormatterComponent {
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: CellDataFormatterComponent, isStandalone: true, selector: "lib-cell-data-formatter", ngImport: i0, template: "{{dataToDisplay}}", styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: CellDataFormatterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-cell-data-formatter', standalone: true, imports: [], template: "{{dataToDisplay}}" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1kYXRhLWZvcm1hdHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdXRpbGl0aWVzL2NlbGwtZGF0YS1mb3JtYXR0ZXIvY2VsbC1kYXRhLWZvcm1hdHRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdXRpbGl0aWVzL2NlbGwtZGF0YS1mb3JtYXR0ZXIvY2VsbC1kYXRhLWZvcm1hdHRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQzs7QUFVL0QsTUFBTSxPQUFPLDBCQUEwQjtJQUNyQyxRQUFRLENBQU07SUFDZCxPQUFPLENBQU07SUFDYixNQUFNLENBQWU7SUFFckIsYUFBYSxDQUFNO0lBRW5CLFFBQVE7UUFDTixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLGlCQUFpQixDQUFDO1FBQ2pELElBQUksU0FBUyxFQUFFLENBQUM7WUFDZCxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNFLENBQUM7SUFDSCxDQUFDO3VHQVpVLDBCQUEwQjsyRkFBMUIsMEJBQTBCLG1GQ1Z2QyxtQkFBaUI7OzJGRFVKLDBCQUEwQjtrQkFQdEMsU0FBUzsrQkFDRSx5QkFBeUIsY0FDdkIsSUFBSSxXQUNQLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGFibGVIZWFkZXJ9IGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvbW9kZWxzL3RhYmxlLWhlYWRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jZWxsLWRhdGEtZm9ybWF0dGVyJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW10sXG4gIHRlbXBsYXRlVXJsOiAnLi9jZWxsLWRhdGEtZm9ybWF0dGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2NlbGwtZGF0YS1mb3JtYXR0ZXIuY29tcG9uZW50LmNzcydcbn0pXG5leHBvcnQgY2xhc3MgQ2VsbERhdGFGb3JtYXR0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjZWxsRGF0YTogYW55O1xuICByb3dEYXRhOiBhbnk7XG4gIGhlYWRlcj86IFRhYmxlSGVhZGVyO1xuXG4gIGRhdGFUb0Rpc3BsYXk6IGFueTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBmb3JtYXR0ZXIgPSB0aGlzLmhlYWRlcj8uY2VsbERhdGFGb3JtYXR0ZXI7XG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgdGhpcy5kYXRhVG9EaXNwbGF5ID0gZm9ybWF0dGVyKHRoaXMuY2VsbERhdGEsIHRoaXMucm93RGF0YSwgdGhpcy5oZWFkZXIpO1xuICAgIH1cbiAgfVxufVxuIiwie3tkYXRhVG9EaXNwbGF5fX0iXX0=