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
    click() {
        this.tableInstance?.cellContentClicked.emit({
            header: this.header,
            data: this.cellData,
            rowData: this.rowData
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: CognitableDataCellComponent, deps: [{ token: i0.Injector }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: CognitableDataCellComponent, isStandalone: true, selector: "cogintable-data-cell", inputs: { header: "header", cellData: "cellData", rowData: "rowData", tableInstance: "tableInstance" }, viewQueries: [{ propertyName: "componentRenderer", first: true, predicate: ["componentRenderer"], descendants: true, read: ViewContainerRef }, { propertyName: "formatterComponent", first: true, predicate: ["formatterComponent"], descendants: true, read: ViewContainerRef }], ngImport: i0, template: "<div style=\"display: flex;\">\n  <div style=\"width: 20px; height: 100%; display: flex; align-items: center;\">\n    <div style=\"width: 15px; height: 15px;\">&nbsp;</div> <!-- Space for Checkbox, Numbers, Etc -->\n  </div>\n\n  <div class=\"cognitable-data-cell\" [style]=\"header?.styles?.cellStyles\">\n    <div class=\"cognitable-data-cell-content\" [style]=\"header?.styles?.cellContentStyles\" (click)=\"click()\">\n      <ng-container *ngIf=\"!header?.renderer?.component && !header?.cellDataFormatter\">{{cellData}}</ng-container>\n      <ng-container *ngIf=\"header?.renderer?.component\" #componentRenderer></ng-container>\n      <ng-container *ngIf=\"header?.cellDataFormatter && !header?.renderer?.component\" #formatterComponent></ng-container>\n    </div>\n  </div>\n\n  <div style=\"width: 20px; height: 100%; display: flex; align-items: center;\">\n    <div style=\"width: 15px; height: 15px;\">&nbsp;</div> <!-- Space to sync with sort in the header, can be used for anything useful -->\n  </div>\n</div>\n", styles: [".cognitable-data-cell{width:150px;padding-top:10px;padding-bottom:10px;display:flex;align-items:center}.cognitable-data-cell-content{width:100%;text-align:left;font-size:14px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: CognitableDataCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cogintable-data-cell', standalone: true, imports: [
                        NgIf
                    ], template: "<div style=\"display: flex;\">\n  <div style=\"width: 20px; height: 100%; display: flex; align-items: center;\">\n    <div style=\"width: 15px; height: 15px;\">&nbsp;</div> <!-- Space for Checkbox, Numbers, Etc -->\n  </div>\n\n  <div class=\"cognitable-data-cell\" [style]=\"header?.styles?.cellStyles\">\n    <div class=\"cognitable-data-cell-content\" [style]=\"header?.styles?.cellContentStyles\" (click)=\"click()\">\n      <ng-container *ngIf=\"!header?.renderer?.component && !header?.cellDataFormatter\">{{cellData}}</ng-container>\n      <ng-container *ngIf=\"header?.renderer?.component\" #componentRenderer></ng-container>\n      <ng-container *ngIf=\"header?.cellDataFormatter && !header?.renderer?.component\" #formatterComponent></ng-container>\n    </div>\n  </div>\n\n  <div style=\"width: 20px; height: 100%; display: flex; align-items: center;\">\n    <div style=\"width: 15px; height: 15px;\">&nbsp;</div> <!-- Space to sync with sort in the header, can be used for anything useful -->\n  </div>\n</div>\n", styles: [".cognitable-data-cell{width:150px;padding-top:10px;padding-bottom:10px;display:flex;align-items:center}.cognitable-data-cell-content{width:100%;text-align:left;font-size:14px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29nbml0YWJsZS1kYXRhLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL2NvZ2ludGFibGUtZGF0YS1jZWxsL2NvZ25pdGFibGUtZGF0YS1jZWxsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS9jb2dpbnRhYmxlLWRhdGEtY2VsbC9jb2duaXRhYmxlLWRhdGEtY2VsbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUdULEtBQUssRUFFTCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNyQyxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSxtRUFBbUUsQ0FBQzs7QUFXN0csTUFBTSxPQUFPLDJCQUEyQjtJQWdCbEI7SUFBNEI7SUFmVSxpQkFBaUIsQ0FBb0I7SUFDcEMsa0JBQWtCLENBQW9CO0lBR2pHLE1BQU0sQ0FBMEI7SUFHaEMsUUFBUSxDQUFNO0lBR2QsT0FBTyxDQUFNO0lBR2IsYUFBYSxDQUE0QjtJQUV6QyxZQUFvQixRQUFrQixFQUFVLGdCQUFrQztRQUE5RCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUNsRixDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGdCQUFnQjtRQUNkLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFB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biAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RhYmxlSGVhZGVyfSBmcm9tICcuLi8uLi8uLi9jb21tb25zL21vZGVscy90YWJsZS1oZWFkZXInO1xuaW1wb3J0IHtUYWJsZUluc3RhbmNlfSBmcm9tICcuLi8uLi8uLi9jb21tb25zL2V4cG9ydGFibGVzL3RhYmxlLWluc3RhbmNlJztcbmltcG9ydCB7TmdJZn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Q2VsbERhdGFGb3JtYXR0ZXJDb21wb25lbnR9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9jZWxsLWRhdGEtZm9ybWF0dGVyL2NlbGwtZGF0YS1mb3JtYXR0ZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29naW50YWJsZS1kYXRhLWNlbGwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgTmdJZlxuICBdLFxuICB0ZW1wbGF0ZVVybDogJy4vY29nbml0YWJsZS1kYXRhLWNlbGwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vY29nbml0YWJsZS1kYXRhLWNlbGwuY29tcG9uZW50LmNzcydcbn0pXG5leHBvcnQgY2xhc3MgQ29nbml0YWJsZURhdGFDZWxsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnY29tcG9uZW50UmVuZGVyZXInLCB7cmVhZDogVmlld0NvbnRhaW5lclJlZn0pIGNvbXBvbmVudFJlbmRlcmVyITogVmlld0NvbnRhaW5lclJlZjtcbiAgQFZpZXdDaGlsZCgnZm9ybWF0dGVyQ29tcG9uZW50Jywge3JlYWQ6IFZpZXdDb250YWluZXJSZWZ9KSBmb3JtYXR0ZXJDb21wb25lbnQhOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIEBJbnB1dCgpXG4gIGhlYWRlcjogVGFibGVIZWFkZXIgfCB1bmRlZmluZWQ7XG5cbiAgQElucHV0KClcbiAgY2VsbERhdGE6IGFueTtcblxuICBASW5wdXQoKVxuICByb3dEYXRhOiBhbnk7XG5cbiAgQElucHV0KClcbiAgdGFibGVJbnN0YW5jZTogVGFibGVJbnN0YW5jZSB8IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmluaXRpYXRlUmVuZGVyZXIoKTtcbiAgICB0aGlzLmluaXRpYXRlRm9ybWF0dGVyKCk7XG4gIH1cblxuICBpbml0aWF0ZVJlbmRlcmVyKCkge1xuICAgIGlmICh0aGlzLmNvbXBvbmVudFJlbmRlcmVyICYmIHRoaXMuaGVhZGVyPy5yZW5kZXJlcj8uY29tcG9uZW50KSB7XG4gICAgICB0aGlzLmNvbXBvbmVudFJlbmRlcmVyLmNsZWFyKCk7XG4gICAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudFJlbmRlcmVyLmNyZWF0ZUNvbXBvbmVudCh0aGlzLmhlYWRlcj8ucmVuZGVyZXI/LmNvbXBvbmVudClcbiAgICAgIGlmIChjb21wb25lbnRSZWY/Lmluc3RhbmNlKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlWyd0YWJsZUluc3RhbmNlJ10gPSB0aGlzLnRhYmxlSW5zdGFuY2U7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlWydhZGRpdGlvbmFsRGF0YSddID0gdGhpcy5oZWFkZXI/LnJlbmRlcmVyPy5hZGRpdGlvbmFsRGF0YTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2VbJ2hlYWRlciddID0gdGhpcy5oZWFkZXI7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlWydyb3dEYXRhJ10gPSB0aGlzLnJvd0RhdGE7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlWydjZWxsRGF0YSddID0gdGhpcy5jZWxsRGF0YTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbml0aWF0ZUZvcm1hdHRlcigpIHtcbiAgICBpZiAodGhpcy5mb3JtYXR0ZXJDb21wb25lbnQgJiYgdGhpcy5oZWFkZXI/LmNlbGxEYXRhRm9ybWF0dGVyICYmICF0aGlzLmhlYWRlcj8ucmVuZGVyZXI/LmNvbXBvbmVudCkge1xuICAgICAgdGhpcy5mb3JtYXR0ZXJDb21wb25lbnQuY2xlYXIoKTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuZm9ybWF0dGVyQ29tcG9uZW50LmNyZWF0ZUNvbXBvbmVudChDZWxsRGF0YUZvcm1hdHRlckNvbXBvbmVudCk7XG4gICAgICBpZiAoY29tcG9uZW50UmVmPy5pbnN0YW5jZSkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZVsnZm9ybWF0dGVyJ10gPSB0aGlzLmhlYWRlci5jZWxsRGF0YUZvcm1hdHRlcjtcblxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZVsnaGVhZGVyJ10gPSB0aGlzLmhlYWRlcjtcblxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZVsncm93RGF0YSddID0gdGhpcy5yb3dEYXRhO1xuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlWydjZWxsRGF0YSddID0gdGhpcy5jZWxsRGF0YTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbGljaygpIHtcbiAgICB0aGlzLnRhYmxlSW5zdGFuY2U/LmNlbGxDb250ZW50Q2xpY2tlZC5lbWl0KHtcbiAgICAgIGhlYWRlcjogdGhpcy5oZWFkZXIsXG4gICAgICBkYXRhOiB0aGlzLmNlbGxEYXRhLFxuICAgICAgcm93RGF0YTogdGhpcy5yb3dEYXRhXG4gICAgfSk7XG4gIH1cbn1cbiIsIjxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O1wiPlxuICA8ZGl2IHN0eWxlPVwid2lkdGg6IDIwcHg7IGhlaWdodDogMTAwJTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cbiAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IDE1cHg7IGhlaWdodDogMTVweDtcIj4mbmJzcDs8L2Rpdj4gPCEtLSBTcGFjZSBmb3IgQ2hlY2tib3gsIE51bWJlcnMsIEV0YyAtLT5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvZ25pdGFibGUtZGF0YS1jZWxsXCIgW3N0eWxlXT1cImhlYWRlcj8uc3R5bGVzPy5jZWxsU3R5bGVzXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvZ25pdGFibGUtZGF0YS1jZWxsLWNvbnRlbnRcIiBbc3R5bGVdPVwiaGVhZGVyPy5zdHlsZXM/LmNlbGxDb250ZW50U3R5bGVzXCIgKGNsaWNrKT1cImNsaWNrKClcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaGVhZGVyPy5yZW5kZXJlcj8uY29tcG9uZW50ICYmICFoZWFkZXI/LmNlbGxEYXRhRm9ybWF0dGVyXCI+e3tjZWxsRGF0YX19PC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGVhZGVyPy5yZW5kZXJlcj8uY29tcG9uZW50XCIgI2NvbXBvbmVudFJlbmRlcmVyPjwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhlYWRlcj8uY2VsbERhdGFGb3JtYXR0ZXIgJiYgIWhlYWRlcj8ucmVuZGVyZXI/LmNvbXBvbmVudFwiICNmb3JtYXR0ZXJDb21wb25lbnQ+PC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgc3R5bGU9XCJ3aWR0aDogMjBweDsgaGVpZ2h0OiAxMDAlOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1wiPlxuICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogMTVweDsgaGVpZ2h0OiAxNXB4O1wiPiZuYnNwOzwvZGl2PiA8IS0tIFNwYWNlIHRvIHN5bmMgd2l0aCBzb3J0IGluIHRoZSBoZWFkZXIsIGNhbiBiZSB1c2VkIGZvciBhbnl0aGluZyB1c2VmdWwgLS0+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=