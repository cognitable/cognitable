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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: CellDataFormatterComponent, isStandalone: true, selector: "lib-cell-data-formatter", ngImport: i0, template: "<span [title]=\"dataToDisplay\">{{dataToDisplay}}</span>\n", styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: CellDataFormatterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-cell-data-formatter', standalone: true, imports: [], template: "<span [title]=\"dataToDisplay\">{{dataToDisplay}}</span>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1kYXRhLWZvcm1hdHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdXRpbGl0aWVzL2NlbGwtZGF0YS1mb3JtYXR0ZXIvY2VsbC1kYXRhLWZvcm1hdHRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvdXRpbGl0aWVzL2NlbGwtZGF0YS1mb3JtYXR0ZXIvY2VsbC1kYXRhLWZvcm1hdHRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQzs7QUFVL0QsTUFBTSxPQUFPLDBCQUEwQjtJQUNyQyxRQUFRLENBQU07SUFDZCxPQUFPLENBQU07SUFDYixNQUFNLENBQWU7SUFFckIsYUFBYSxDQUFNO0lBRW5CLFFBQVE7UUFDTixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLGlCQUFpQixDQUFDO1FBQ2pELElBQUksU0FBUyxFQUFFLENBQUM7WUFDZCxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNFLENBQUM7SUFDSCxDQUFDO3VHQVpVLDBCQUEwQjsyRkFBMUIsMEJBQTBCLG1GQ1Z2Qyw0REFDQTs7MkZEU2EsMEJBQTBCO2tCQVB0QyxTQUFTOytCQUNFLHlCQUF5QixjQUN2QixJQUFJLFdBQ1AsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUYWJsZUhlYWRlcn0gZnJvbSAnLi4vLi4vLi4vY29tbW9ucy9tb2RlbHMvdGFibGUtaGVhZGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNlbGwtZGF0YS1mb3JtYXR0ZXInLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2NlbGwtZGF0YS1mb3JtYXR0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vY2VsbC1kYXRhLWZvcm1hdHRlci5jb21wb25lbnQuY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBDZWxsRGF0YUZvcm1hdHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNlbGxEYXRhOiBhbnk7XG4gIHJvd0RhdGE6IGFueTtcbiAgaGVhZGVyPzogVGFibGVIZWFkZXI7XG5cbiAgZGF0YVRvRGlzcGxheTogYW55O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGZvcm1hdHRlciA9IHRoaXMuaGVhZGVyPy5jZWxsRGF0YUZvcm1hdHRlcjtcbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICB0aGlzLmRhdGFUb0Rpc3BsYXkgPSBmb3JtYXR0ZXIodGhpcy5jZWxsRGF0YSwgdGhpcy5yb3dEYXRhLCB0aGlzLmhlYWRlcik7XG4gICAgfVxuICB9XG59XG4iLCI8c3BhbiBbdGl0bGVdPVwiZGF0YVRvRGlzcGxheVwiPnt7ZGF0YVRvRGlzcGxheX19PC9zcGFuPlxuIl19