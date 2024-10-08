import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { NgIf } from '@angular/common';
import * as i0 from "@angular/core";
export class CognitableDataCellComponent {
    injector;
    viewContainerRef;
    container;
    header;
    cellData;
    rowData;
    tableInstance;
    constructor(injector, viewContainerRef) {
        this.injector = injector;
        this.viewContainerRef = viewContainerRef;
    }
    ngOnInit() {
        if (this.header?.renderer?.componentName?.length) {
        }
    }
    ngAfterViewInit() {
        if (this.container) {
            this.container.clear();
            this.container.createComponent(this.header?.renderer?.component);
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
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.5", type: CognitableDataCellComponent, isStandalone: true, selector: "cogintable-data-cell", inputs: { header: "header", cellData: "cellData", rowData: "rowData", tableInstance: "tableInstance" }, viewQueries: [{ propertyName: "container", first: true, predicate: ["componentRenderer"], descendants: true, read: ViewContainerRef }], ngImport: i0, template: "<div style=\"display: flex;\">\n  <div style=\"width: 20px; height: 100%; display: flex; align-items: center;\">\n    <div style=\"width: 15px; height: 15px;\">&nbsp;</div> <!-- Space for Checkbox, Numbers, Etc -->\n  </div>\n\n  <div class=\"cognitable-data-cell\" [style]=\"header?.styles?.cellStyles\">\n    <div class=\"cognitable-data-cell-content\" [style]=\"header?.styles?.cellContentStyles\" (click)=\"click()\">\n        <ng-container *ngIf=\"!header?.renderer?.component\">{{cellData}}</ng-container>\n        <ng-container *ngIf=\"header?.renderer?.component\" #componentRenderer></ng-container>\n    </div>\n  </div>\n\n  <div style=\"width: 20px; height: 100%; display: flex; align-items: center;\">\n    <div style=\"width: 15px; height: 15px;\">&nbsp;</div> <!-- Space to sync with sort in the header, can be used for anything useful -->\n  </div>\n</div>\n", styles: [".cognitable-data-cell{width:150px;padding-top:10px;padding-bottom:10px;display:flex;align-items:center}.cognitable-data-cell-content{width:100%;text-align:left;font-size:14px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: CognitableDataCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cogintable-data-cell', standalone: true, imports: [
                        NgIf
                    ], template: "<div style=\"display: flex;\">\n  <div style=\"width: 20px; height: 100%; display: flex; align-items: center;\">\n    <div style=\"width: 15px; height: 15px;\">&nbsp;</div> <!-- Space for Checkbox, Numbers, Etc -->\n  </div>\n\n  <div class=\"cognitable-data-cell\" [style]=\"header?.styles?.cellStyles\">\n    <div class=\"cognitable-data-cell-content\" [style]=\"header?.styles?.cellContentStyles\" (click)=\"click()\">\n        <ng-container *ngIf=\"!header?.renderer?.component\">{{cellData}}</ng-container>\n        <ng-container *ngIf=\"header?.renderer?.component\" #componentRenderer></ng-container>\n    </div>\n  </div>\n\n  <div style=\"width: 20px; height: 100%; display: flex; align-items: center;\">\n    <div style=\"width: 15px; height: 15px;\">&nbsp;</div> <!-- Space to sync with sort in the header, can be used for anything useful -->\n  </div>\n</div>\n", styles: [".cognitable-data-cell{width:150px;padding-top:10px;padding-bottom:10px;display:flex;align-items:center}.cognitable-data-cell-content{width:100%;text-align:left;font-size:14px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n"] }]
        }], ctorParameters: () => [{ type: i0.Injector }, { type: i0.ViewContainerRef }], propDecorators: { container: [{
                type: ViewChild,
                args: ['componentRenderer', { read: ViewContainerRef }]
            }], header: [{
                type: Input
            }], cellData: [{
                type: Input
            }], rowData: [{
                type: Input
            }], tableInstance: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29nbml0YWJsZS1kYXRhLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL2NvZ2ludGFibGUtZGF0YS1jZWxsL2NvZ25pdGFibGUtZGF0YS1jZWxsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS9jb2dpbnRhYmxlLWRhdGEtY2VsbC9jb2duaXRhYmxlLWRhdGEtY2VsbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUdULEtBQUssRUFFTCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7QUFXckMsTUFBTSxPQUFPLDJCQUEyQjtJQWVsQjtJQUE0QjtJQWRVLFNBQVMsQ0FBb0I7SUFHdkYsTUFBTSxDQUEwQjtJQUdoQyxRQUFRLENBQU07SUFHZCxPQUFPLENBQU07SUFHYixhQUFhLENBQTRCO0lBRXpDLFlBQW9CLFFBQWtCLEVBQVUsZ0JBQWtDO1FBQTlELGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ2xGLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDbkQsQ0FBQztJQUNILENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQTtRQUNsRSxDQUFDO0lBQ0gsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsYUFBYSxFQUFFLGtCQUFrQixDQUFDLElBQUksQ0FBQztZQUMxQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDO3VHQXBDVSwyQkFBMkI7MkZBQTNCLDJCQUEyQixtUkFDQyxnQkFBZ0IsNkJDeEJ6RCwyMkJBZ0JBLG1UREVJLElBQUk7OzJGQUtLLDJCQUEyQjtrQkFUdkMsU0FBUzsrQkFDRSxzQkFBc0IsY0FDcEIsSUFBSSxXQUNQO3dCQUNQLElBQUk7cUJBQ0w7NEdBS3lELFNBQVM7c0JBQWxFLFNBQVM7dUJBQUMsbUJBQW1CLEVBQUUsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUM7Z0JBR3hELE1BQU07c0JBREwsS0FBSztnQkFJTixRQUFRO3NCQURQLEtBQUs7Z0JBSU4sT0FBTztzQkFETixLQUFLO2dCQUlOLGFBQWE7c0JBRFosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUYWJsZUhlYWRlcn0gZnJvbSAnLi4vLi4vLi4vY29tbW9ucy9tb2RlbHMvdGFibGUtaGVhZGVyJztcbmltcG9ydCB7VGFibGVJbnN0YW5jZX0gZnJvbSAnLi4vLi4vLi4vY29tbW9ucy9leHBvcnRhYmxlcy90YWJsZS1pbnN0YW5jZSc7XG5pbXBvcnQge05nSWZ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvZ2ludGFibGUtZGF0YS1jZWxsJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIE5nSWZcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvZ25pdGFibGUtZGF0YS1jZWxsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2NvZ25pdGFibGUtZGF0YS1jZWxsLmNvbXBvbmVudC5jc3MnXG59KVxuZXhwb3J0IGNsYXNzIENvZ25pdGFibGVEYXRhQ2VsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ2NvbXBvbmVudFJlbmRlcmVyJywge3JlYWQ6IFZpZXdDb250YWluZXJSZWZ9KSBjb250YWluZXIhOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIEBJbnB1dCgpXG4gIGhlYWRlcjogVGFibGVIZWFkZXIgfCB1bmRlZmluZWQ7XG5cbiAgQElucHV0KClcbiAgY2VsbERhdGE6IGFueTtcblxuICBASW5wdXQoKVxuICByb3dEYXRhOiBhbnk7XG5cbiAgQElucHV0KClcbiAgdGFibGVJbnN0YW5jZTogVGFibGVJbnN0YW5jZSB8IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5oZWFkZXI/LnJlbmRlcmVyPy5jb21wb25lbnROYW1lPy5sZW5ndGgpIHtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGVhcigpO1xuICAgICAgdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KHRoaXMuaGVhZGVyPy5yZW5kZXJlcj8uY29tcG9uZW50KVxuICAgIH1cbiAgfVxuXG4gIGNsaWNrKCkge1xuICAgIHRoaXMudGFibGVJbnN0YW5jZT8uY2VsbENvbnRlbnRDbGlja2VkLmVtaXQoe1xuICAgICAgaGVhZGVyOiB0aGlzLmhlYWRlcixcbiAgICAgIGRhdGE6IHRoaXMuY2VsbERhdGEsXG4gICAgICByb3dEYXRhOiB0aGlzLnJvd0RhdGFcbiAgICB9KTtcbiAgfVxufVxuIiwiPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7XCI+XG4gIDxkaXYgc3R5bGU9XCJ3aWR0aDogMjBweDsgaGVpZ2h0OiAxMDAlOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1wiPlxuICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogMTVweDsgaGVpZ2h0OiAxNXB4O1wiPiZuYnNwOzwvZGl2PiA8IS0tIFNwYWNlIGZvciBDaGVja2JveCwgTnVtYmVycywgRXRjIC0tPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29nbml0YWJsZS1kYXRhLWNlbGxcIiBbc3R5bGVdPVwiaGVhZGVyPy5zdHlsZXM/LmNlbGxTdHlsZXNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29nbml0YWJsZS1kYXRhLWNlbGwtY29udGVudFwiIFtzdHlsZV09XCJoZWFkZXI/LnN0eWxlcz8uY2VsbENvbnRlbnRTdHlsZXNcIiAoY2xpY2spPVwiY2xpY2soKVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWhlYWRlcj8ucmVuZGVyZXI/LmNvbXBvbmVudFwiPnt7Y2VsbERhdGF9fTwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGVhZGVyPy5yZW5kZXJlcj8uY29tcG9uZW50XCIgI2NvbXBvbmVudFJlbmRlcmVyPjwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IHN0eWxlPVwid2lkdGg6IDIwcHg7IGhlaWdodDogMTAwJTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cbiAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IDE1cHg7IGhlaWdodDogMTVweDtcIj4mbmJzcDs8L2Rpdj4gPCEtLSBTcGFjZSB0byBzeW5jIHdpdGggc29ydCBpbiB0aGUgaGVhZGVyLCBjYW4gYmUgdXNlZCBmb3IgYW55dGhpbmcgdXNlZnVsIC0tPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19