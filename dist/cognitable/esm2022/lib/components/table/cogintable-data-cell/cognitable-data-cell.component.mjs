import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { NgIf } from '@angular/common';
import { CellDataFormatterComponent } from '../../utilities/cell-data-formatter/cell-data-formatter.component';
import * as i0 from "@angular/core";
export class CognitableDataCellComponent {
    injector;
    viewContainerRef;
    componentRenderer;
    formatterComponent;
    header;
    cellData;
    rowData;
    tableInstance;
    constructor(injector, viewContainerRef) {
        this.injector = injector;
        this.viewContainerRef = viewContainerRef;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.initiateRenderer();
        this.initiateFormatter();
    }
    initiateRenderer() {
        if (this.componentRenderer && this.header?.renderer?.component) {
            this.componentRenderer.clear();
            const componentRef = this.componentRenderer.createComponent(this.header?.renderer?.component);
            if (componentRef?.instance) {
                // @ts-ignore
                componentRef.instance['tableInstance'] = this.tableInstance;
                // @ts-ignore
                componentRef.instance['additionalData'] = this.header?.renderer?.additionalData;
                // @ts-ignore
                componentRef.instance['header'] = this.header;
                // @ts-ignore
                componentRef.instance['rowData'] = this.rowData;
                // @ts-ignore
                componentRef.instance['cellData'] = this.cellData;
            }
        }
    }
    initiateFormatter() {
        if (this.formatterComponent && this.header?.cellDataFormatter && !this.header?.renderer?.component) {
            this.formatterComponent.clear();
            const componentRef = this.formatterComponent.createComponent(CellDataFormatterComponent);
            if (componentRef?.instance) {
                // @ts-ignore
                componentRef.instance['formatter'] = this.header.cellDataFormatter;
                // @ts-ignore
                componentRef.instance['header'] = this.header;
                // @ts-ignore
                componentRef.instance['rowData'] = this.rowData;
                // @ts-ignore
                componentRef.instance['cellData'] = this.cellData;
            }
        }
    }
    onCheck(event, field) {
        this.rowData['checked'] = this.rowData['checked'] ?? {};
        this.rowData.checked[field] = event?.target?.checked ?? false;
    }
    click() {
        this.tableInstance?.cellContentClicked.emit({
            header: this.header,
            data: this.cellData,
            rowData: this.rowData
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: CognitableDataCellComponent, deps: [{ token: i0.Injector }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: CognitableDataCellComponent, isStandalone: true, selector: "cogintable-data-cell", inputs: { header: "header", cellData: "cellData", rowData: "rowData", tableInstance: "tableInstance" }, viewQueries: [{ propertyName: "componentRenderer", first: true, predicate: ["componentRenderer"], descendants: true, read: ViewContainerRef }, { propertyName: "formatterComponent", first: true, predicate: ["formatterComponent"], descendants: true, read: ViewContainerRef }], ngImport: i0, template: "<div style=\"display: flex; align-items: center;\">\n  <div style=\"width: 20px; height: 100%; display: flex; align-items: center;\">\n    <div style=\"width: 15px; height: 15px;\">\n      <span *ngIf=\"header?.checkbox?.showInCell\">\n        <input type=\"checkbox\" class=\"cognitable-cell-checkbox\" (change)=\"onCheck($event, header?.field)\" [checked]=\"rowData?.checked && header?.field && rowData?.checked[header?.field ?? '']\">\n      </span>\n      <span *ngIf=\"!header?.checkbox?.showInCell\">&nbsp;</span>\n    </div> <!-- Space for Checkbox, Numbers, Etc -->\n  </div>\n\n  <div class=\"cognitable-data-cell\" [style]=\"header?.styles?.cellStyles\">\n    <div class=\"cognitable-data-cell-content\" [style]=\"header?.styles?.cellContentStyles\" (click)=\"click()\">\n      <ng-container *ngIf=\"!header?.renderer?.component && !header?.cellDataFormatter\">{{cellData}}</ng-container>\n      <ng-container *ngIf=\"header?.renderer?.component\" #componentRenderer></ng-container>\n      <ng-container *ngIf=\"header?.cellDataFormatter && !header?.renderer?.component\" #formatterComponent></ng-container>\n    </div>\n  </div>\n\n  <div style=\"width: 20px; height: 100%; display: flex; align-items: center;\">\n    <div style=\"width: 15px; height: 15px;\">&nbsp;</div> <!-- Space to sync with sort in the header, can be used for anything useful -->\n  </div>\n</div>\n", styles: [".cognitable-data-cell{width:150px;padding-top:10px;padding-bottom:10px;display:flex;align-items:center}.cognitable-data-cell-content{width:100%;text-align:left;font-size:14px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cognitable-cell-checkbox{margin-bottom:14px;width:14px;height:14px}.cognitable-cell-checkbox:focus{outline:none!important;--tw-ring-color: none !important}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: CognitableDataCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cogintable-data-cell', standalone: true, imports: [
                        NgIf
                    ], template: "<div style=\"display: flex; align-items: center;\">\n  <div style=\"width: 20px; height: 100%; display: flex; align-items: center;\">\n    <div style=\"width: 15px; height: 15px;\">\n      <span *ngIf=\"header?.checkbox?.showInCell\">\n        <input type=\"checkbox\" class=\"cognitable-cell-checkbox\" (change)=\"onCheck($event, header?.field)\" [checked]=\"rowData?.checked && header?.field && rowData?.checked[header?.field ?? '']\">\n      </span>\n      <span *ngIf=\"!header?.checkbox?.showInCell\">&nbsp;</span>\n    </div> <!-- Space for Checkbox, Numbers, Etc -->\n  </div>\n\n  <div class=\"cognitable-data-cell\" [style]=\"header?.styles?.cellStyles\">\n    <div class=\"cognitable-data-cell-content\" [style]=\"header?.styles?.cellContentStyles\" (click)=\"click()\">\n      <ng-container *ngIf=\"!header?.renderer?.component && !header?.cellDataFormatter\">{{cellData}}</ng-container>\n      <ng-container *ngIf=\"header?.renderer?.component\" #componentRenderer></ng-container>\n      <ng-container *ngIf=\"header?.cellDataFormatter && !header?.renderer?.component\" #formatterComponent></ng-container>\n    </div>\n  </div>\n\n  <div style=\"width: 20px; height: 100%; display: flex; align-items: center;\">\n    <div style=\"width: 15px; height: 15px;\">&nbsp;</div> <!-- Space to sync with sort in the header, can be used for anything useful -->\n  </div>\n</div>\n", styles: [".cognitable-data-cell{width:150px;padding-top:10px;padding-bottom:10px;display:flex;align-items:center}.cognitable-data-cell-content{width:100%;text-align:left;font-size:14px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cognitable-cell-checkbox{margin-bottom:14px;width:14px;height:14px}.cognitable-cell-checkbox:focus{outline:none!important;--tw-ring-color: none !important}\n"] }]
        }], ctorParameters: () => [{ type: i0.Injector }, { type: i0.ViewContainerRef }], propDecorators: { componentRenderer: [{
                type: ViewChild,
                args: ['componentRenderer', { read: ViewContainerRef }]
            }], formatterComponent: [{
                type: ViewChild,
                args: ['formatterComponent', { read: ViewContainerRef }]
            }], header: [{
                type: Input
            }], cellData: [{
                type: Input
            }], rowData: [{
                type: Input
            }], tableInstance: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29nbml0YWJsZS1kYXRhLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL2NvZ2ludGFibGUtZGF0YS1jZWxsL2NvZ25pdGFibGUtZGF0YS1jZWxsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS9jb2dpbnRhYmxlLWRhdGEtY2VsbC9jb2duaXRhYmxlLWRhdGEtY2VsbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUdULEtBQUssRUFFTCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNyQyxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSxtRUFBbUUsQ0FBQzs7QUFXN0csTUFBTSxPQUFPLDJCQUEyQjtJQWdCbEI7SUFBNEI7SUFmVSxpQkFBaUIsQ0FBb0I7SUFDcEMsa0JBQWtCLENBQW9CO0lBR2pHLE1BQU0sQ0FBMEI7SUFHaEMsUUFBUSxDQUFNO0lBR2QsT0FBTyxDQUFNO0lBR2IsYUFBYSxDQUE0QjtJQUV6QyxZQUFvQixRQUFrQixFQUFVLGdCQUFrQztRQUE5RCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUNsRixDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGdCQUFnQjtRQUNkLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFB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QUUsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUM7Z0JBQ0csa0JBQWtCO3NCQUE1RSxTQUFTO3VCQUFDLG9CQUFvQixFQUFFLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFDO2dCQUd6RCxNQUFNO3NCQURMLEtBQUs7Z0JBSU4sUUFBUTtzQkFEUCxLQUFLO2dCQUlOLE9BQU87c0JBRE4sS0FBSztnQkFJTixhQUFhO3NCQURaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGFibGVIZWFkZXJ9IGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvbW9kZWxzL3RhYmxlLWhlYWRlcic7XG5pbXBvcnQge1RhYmxlSW5zdGFuY2V9IGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvZXhwb3J0YWJsZXMvdGFibGUtaW5zdGFuY2UnO1xuaW1wb3J0IHtOZ0lmfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtDZWxsRGF0YUZvcm1hdHRlckNvbXBvbmVudH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2NlbGwtZGF0YS1mb3JtYXR0ZXIvY2VsbC1kYXRhLWZvcm1hdHRlci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb2dpbnRhYmxlLWRhdGEtY2VsbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBOZ0lmXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9jb2duaXRhYmxlLWRhdGEtY2VsbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9jb2duaXRhYmxlLWRhdGEtY2VsbC5jb21wb25lbnQuY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBDb2duaXRhYmxlRGF0YUNlbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCdjb21wb25lbnRSZW5kZXJlcicsIHtyZWFkOiBWaWV3Q29udGFpbmVyUmVmfSkgY29tcG9uZW50UmVuZGVyZXIhOiBWaWV3Q29udGFpbmVyUmVmO1xuICBAVmlld0NoaWxkKCdmb3JtYXR0ZXJDb21wb25lbnQnLCB7cmVhZDogVmlld0NvbnRhaW5lclJlZn0pIGZvcm1hdHRlckNvbXBvbmVudCE6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgQElucHV0KClcbiAgaGVhZGVyOiBUYWJsZUhlYWRlciB8IHVuZGVmaW5lZDtcblxuICBASW5wdXQoKVxuICBjZWxsRGF0YTogYW55O1xuXG4gIEBJbnB1dCgpXG4gIHJvd0RhdGE6IGFueTtcblxuICBASW5wdXQoKVxuICB0YWJsZUluc3RhbmNlOiBUYWJsZUluc3RhbmNlIHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLCBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuaW5pdGlhdGVSZW5kZXJlcigpO1xuICAgIHRoaXMuaW5pdGlhdGVGb3JtYXR0ZXIoKTtcbiAgfVxuXG4gIGluaXRpYXRlUmVuZGVyZXIoKSB7XG4gICAgaWYgKHRoaXMuY29tcG9uZW50UmVuZGVyZXIgJiYgdGhpcy5oZWFkZXI/LnJlbmRlcmVyPy5jb21wb25lbnQpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50UmVuZGVyZXIuY2xlYXIoKTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuY29tcG9uZW50UmVuZGVyZXIuY3JlYXRlQ29tcG9uZW50KHRoaXMuaGVhZGVyPy5yZW5kZXJlcj8uY29tcG9uZW50KVxuICAgICAgaWYgKGNvbXBvbmVudFJlZj8uaW5zdGFuY2UpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2VbJ3RhYmxlSW5zdGFuY2UnXSA9IHRoaXMudGFibGVJbnN0YW5jZTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2VbJ2FkZGl0aW9uYWxEYXRhJ10gPSB0aGlzLmhlYWRlcj8ucmVuZGVyZXI/LmFkZGl0aW9uYWxEYXRhO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZVsnaGVhZGVyJ10gPSB0aGlzLmhlYWRlcjtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2VbJ3Jvd0RhdGEnXSA9IHRoaXMucm93RGF0YTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2VbJ2NlbGxEYXRhJ10gPSB0aGlzLmNlbGxEYXRhO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGluaXRpYXRlRm9ybWF0dGVyKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdHRlckNvbXBvbmVudCAmJiB0aGlzLmhlYWRlcj8uY2VsbERhdGFGb3JtYXR0ZXIgJiYgIXRoaXMuaGVhZGVyPy5yZW5kZXJlcj8uY29tcG9uZW50KSB7XG4gICAgICB0aGlzLmZvcm1hdHRlckNvbXBvbmVudC5jbGVhcigpO1xuICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5mb3JtYXR0ZXJDb21wb25lbnQuY3JlYXRlQ29tcG9uZW50KENlbGxEYXRhRm9ybWF0dGVyQ29tcG9uZW50KTtcbiAgICAgIGlmIChjb21wb25lbnRSZWY/Lmluc3RhbmNlKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlWydmb3JtYXR0ZXInXSA9IHRoaXMuaGVhZGVyLmNlbGxEYXRhRm9ybWF0dGVyO1xuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlWydoZWFkZXInXSA9IHRoaXMuaGVhZGVyO1xuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlWydyb3dEYXRhJ10gPSB0aGlzLnJvd0RhdGE7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2VbJ2NlbGxEYXRhJ10gPSB0aGlzLmNlbGxEYXRhO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2hlY2soZXZlbnQ6IGFueSwgZmllbGQ6IGFueSkge1xuICAgIHRoaXMucm93RGF0YVsnY2hlY2tlZCddID0gdGhpcy5yb3dEYXRhWydjaGVja2VkJ10gPz8ge307XG4gICAgdGhpcy5yb3dEYXRhLmNoZWNrZWRbZmllbGRdID0gZXZlbnQ/LnRhcmdldD8uY2hlY2tlZCA/PyBmYWxzZTtcbiAgfVxuXG4gIGNsaWNrKCkge1xuICAgIHRoaXMudGFibGVJbnN0YW5jZT8uY2VsbENvbnRlbnRDbGlja2VkLmVtaXQoe1xuICAgICAgaGVhZGVyOiB0aGlzLmhlYWRlcixcbiAgICAgIGRhdGE6IHRoaXMuY2VsbERhdGEsXG4gICAgICByb3dEYXRhOiB0aGlzLnJvd0RhdGFcbiAgICB9KTtcbiAgfVxufVxuIiwiPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XG4gIDxkaXYgc3R5bGU9XCJ3aWR0aDogMjBweDsgaGVpZ2h0OiAxMDAlOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1wiPlxuICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogMTVweDsgaGVpZ2h0OiAxNXB4O1wiPlxuICAgICAgPHNwYW4gKm5nSWY9XCJoZWFkZXI/LmNoZWNrYm94Py5zaG93SW5DZWxsXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNvZ25pdGFibGUtY2VsbC1jaGVja2JveFwiIChjaGFuZ2UpPVwib25DaGVjaygkZXZlbnQsIGhlYWRlcj8uZmllbGQpXCIgW2NoZWNrZWRdPVwicm93RGF0YT8uY2hlY2tlZCAmJiBoZWFkZXI/LmZpZWxkICYmIHJvd0RhdGE/LmNoZWNrZWRbaGVhZGVyPy5maWVsZCA/PyAnJ11cIj5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuICpuZ0lmPVwiIWhlYWRlcj8uY2hlY2tib3g/LnNob3dJbkNlbGxcIj4mbmJzcDs8L3NwYW4+XG4gICAgPC9kaXY+IDwhLS0gU3BhY2UgZm9yIENoZWNrYm94LCBOdW1iZXJzLCBFdGMgLS0+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb2duaXRhYmxlLWRhdGEtY2VsbFwiIFtzdHlsZV09XCJoZWFkZXI/LnN0eWxlcz8uY2VsbFN0eWxlc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2duaXRhYmxlLWRhdGEtY2VsbC1jb250ZW50XCIgW3N0eWxlXT1cImhlYWRlcj8uc3R5bGVzPy5jZWxsQ29udGVudFN0eWxlc1wiIChjbGljayk9XCJjbGljaygpXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWhlYWRlcj8ucmVuZGVyZXI/LmNvbXBvbmVudCAmJiAhaGVhZGVyPy5jZWxsRGF0YUZvcm1hdHRlclwiPnt7Y2VsbERhdGF9fTwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhlYWRlcj8ucmVuZGVyZXI/LmNvbXBvbmVudFwiICNjb21wb25lbnRSZW5kZXJlcj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJoZWFkZXI/LmNlbGxEYXRhRm9ybWF0dGVyICYmICFoZWFkZXI/LnJlbmRlcmVyPy5jb21wb25lbnRcIiAjZm9ybWF0dGVyQ29tcG9uZW50PjwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IHN0eWxlPVwid2lkdGg6IDIwcHg7IGhlaWdodDogMTAwJTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cbiAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IDE1cHg7IGhlaWdodDogMTVweDtcIj4mbmJzcDs8L2Rpdj4gPCEtLSBTcGFjZSB0byBzeW5jIHdpdGggc29ydCBpbiB0aGUgaGVhZGVyLCBjYW4gYmUgdXNlZCBmb3IgYW55dGhpbmcgdXNlZnVsIC0tPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19