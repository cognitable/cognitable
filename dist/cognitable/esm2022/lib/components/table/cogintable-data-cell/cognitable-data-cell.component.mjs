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
    }
    ngAfterViewInit() {
        if (this.container && this.header?.renderer?.component) {
            this.container.clear();
            const componentRef = this.container.createComponent(this.header?.renderer?.component);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29nbml0YWJsZS1kYXRhLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL2NvZ2ludGFibGUtZGF0YS1jZWxsL2NvZ25pdGFibGUtZGF0YS1jZWxsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS9jb2dpbnRhYmxlLWRhdGEtY2VsbC9jb2duaXRhYmxlLWRhdGEtY2VsbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUdULEtBQUssRUFFTCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7QUFXckMsTUFBTSxPQUFPLDJCQUEyQjtJQWVsQjtJQUE0QjtJQWRVLFNBQVMsQ0FBb0I7SUFHdkYsTUFBTSxDQUEwQjtJQUdoQyxRQUFRLENBQU07SUFHZCxPQUFPLENBQU07SUFHYixhQUFhLENBQTRCO0lBRXpDLFlBQW9CLFFBQWtCLEVBQVUsZ0JBQWtDO1FBQTlELGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ2xGLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUM7WUFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN2QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQTtZQUNyRixJQUFJLFlBQVksRUFBRSxRQUFRLEVBQUUsQ0FBQztnQkFDM0IsYUFBYTtnQkFDYixZQUFZLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQzVELGFBQWE7Z0JBQ2IsWUFBWSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLGNBQWMsQ0FBQztnQkFDaEYsYUFBYTtnQkFDYixZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzlDLGFBQWE7Z0JBQ2IsWUFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNoRCxhQUFhO2dCQUNiLFlBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNwRCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7WUFDMUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUTtZQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzt1R0E5Q1UsMkJBQTJCOzJGQUEzQiwyQkFBMkIsbVJBQ0MsZ0JBQWdCLDZCQ3hCekQsMjJCQWdCQSxtVERFSSxJQUFJOzsyRkFLSywyQkFBMkI7a0JBVHZDLFNBQVM7K0JBQ0Usc0JBQXNCLGNBQ3BCLElBQUksV0FDUDt3QkFDUCxJQUFJO3FCQUNMOzRHQUt5RCxTQUFTO3NCQUFsRSxTQUFTO3VCQUFDLG1CQUFtQixFQUFFLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFDO2dCQUd4RCxNQUFNO3NCQURMLEtBQUs7Z0JBSU4sUUFBUTtzQkFEUCxLQUFLO2dCQUlOLE9BQU87c0JBRE4sS0FBSztnQkFJTixhQUFhO3NCQURaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGFibGVIZWFkZXJ9IGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvbW9kZWxzL3RhYmxlLWhlYWRlcic7XG5pbXBvcnQge1RhYmxlSW5zdGFuY2V9IGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvZXhwb3J0YWJsZXMvdGFibGUtaW5zdGFuY2UnO1xuaW1wb3J0IHtOZ0lmfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb2dpbnRhYmxlLWRhdGEtY2VsbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBOZ0lmXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9jb2duaXRhYmxlLWRhdGEtY2VsbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9jb2duaXRhYmxlLWRhdGEtY2VsbC5jb21wb25lbnQuY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBDb2duaXRhYmxlRGF0YUNlbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCdjb21wb25lbnRSZW5kZXJlcicsIHtyZWFkOiBWaWV3Q29udGFpbmVyUmVmfSkgY29udGFpbmVyITogVmlld0NvbnRhaW5lclJlZjtcblxuICBASW5wdXQoKVxuICBoZWFkZXI6IFRhYmxlSGVhZGVyIHwgdW5kZWZpbmVkO1xuXG4gIEBJbnB1dCgpXG4gIGNlbGxEYXRhOiBhbnk7XG5cbiAgQElucHV0KClcbiAgcm93RGF0YTogYW55O1xuXG4gIEBJbnB1dCgpXG4gIHRhYmxlSW5zdGFuY2U6IFRhYmxlSW5zdGFuY2UgfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuY29udGFpbmVyICYmIHRoaXMuaGVhZGVyPy5yZW5kZXJlcj8uY29tcG9uZW50KSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGVhcigpO1xuICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KHRoaXMuaGVhZGVyPy5yZW5kZXJlcj8uY29tcG9uZW50KVxuICAgICAgaWYgKGNvbXBvbmVudFJlZj8uaW5zdGFuY2UpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2VbJ3RhYmxlSW5zdGFuY2UnXSA9IHRoaXMudGFibGVJbnN0YW5jZTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2VbJ2FkZGl0aW9uYWxEYXRhJ10gPSB0aGlzLmhlYWRlcj8ucmVuZGVyZXI/LmFkZGl0aW9uYWxEYXRhO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZVsnaGVhZGVyJ10gPSB0aGlzLmhlYWRlcjtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2VbJ3Jvd0RhdGEnXSA9IHRoaXMucm93RGF0YTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2VbJ2NlbGxEYXRhJ10gPSB0aGlzLmNlbGxEYXRhO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNsaWNrKCkge1xuICAgIHRoaXMudGFibGVJbnN0YW5jZT8uY2VsbENvbnRlbnRDbGlja2VkLmVtaXQoe1xuICAgICAgaGVhZGVyOiB0aGlzLmhlYWRlcixcbiAgICAgIGRhdGE6IHRoaXMuY2VsbERhdGEsXG4gICAgICByb3dEYXRhOiB0aGlzLnJvd0RhdGFcbiAgICB9KTtcbiAgfVxufVxuIiwiPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7XCI+XG4gIDxkaXYgc3R5bGU9XCJ3aWR0aDogMjBweDsgaGVpZ2h0OiAxMDAlOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1wiPlxuICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogMTVweDsgaGVpZ2h0OiAxNXB4O1wiPiZuYnNwOzwvZGl2PiA8IS0tIFNwYWNlIGZvciBDaGVja2JveCwgTnVtYmVycywgRXRjIC0tPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29nbml0YWJsZS1kYXRhLWNlbGxcIiBbc3R5bGVdPVwiaGVhZGVyPy5zdHlsZXM/LmNlbGxTdHlsZXNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29nbml0YWJsZS1kYXRhLWNlbGwtY29udGVudFwiIFtzdHlsZV09XCJoZWFkZXI/LnN0eWxlcz8uY2VsbENvbnRlbnRTdHlsZXNcIiAoY2xpY2spPVwiY2xpY2soKVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWhlYWRlcj8ucmVuZGVyZXI/LmNvbXBvbmVudFwiPnt7Y2VsbERhdGF9fTwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGVhZGVyPy5yZW5kZXJlcj8uY29tcG9uZW50XCIgI2NvbXBvbmVudFJlbmRlcmVyPjwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IHN0eWxlPVwid2lkdGg6IDIwcHg7IGhlaWdodDogMTAwJTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cbiAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IDE1cHg7IGhlaWdodDogMTVweDtcIj4mbmJzcDs8L2Rpdj4gPCEtLSBTcGFjZSB0byBzeW5jIHdpdGggc29ydCBpbiB0aGUgaGVhZGVyLCBjYW4gYmUgdXNlZCBmb3IgYW55dGhpbmcgdXNlZnVsIC0tPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19