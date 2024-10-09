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
        if (this.container && this.header?.renderer?.component) {
            this.container.clear();
            const componentRef = this.container.createComponent(this.header?.renderer?.component);
            if (componentRef?.instance) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29nbml0YWJsZS1kYXRhLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL2NvZ2ludGFibGUtZGF0YS1jZWxsL2NvZ25pdGFibGUtZGF0YS1jZWxsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy90YWJsZS9jb2dpbnRhYmxlLWRhdGEtY2VsbC9jb2duaXRhYmxlLWRhdGEtY2VsbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUdULEtBQUssRUFFTCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7QUFXckMsTUFBTSxPQUFPLDJCQUEyQjtJQWVsQjtJQUE0QjtJQWRVLFNBQVMsQ0FBb0I7SUFHdkYsTUFBTSxDQUEwQjtJQUdoQyxRQUFRLENBQU07SUFHZCxPQUFPLENBQU07SUFHYixhQUFhLENBQTRCO0lBRXpDLFlBQW9CLFFBQWtCLEVBQVUsZ0JBQWtDO1FBQTlELGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ2xGLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDbkQsQ0FBQztJQUNILENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDO1lBQ3ZELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUE7WUFDckYsSUFBSSxZQUFZLEVBQUUsUUFBUSxFQUFFLENBQUM7Z0JBQzNCLGFBQWE7Z0JBQ2IsWUFBWSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLGNBQWMsQ0FBQztnQkFDaEYsYUFBYTtnQkFDYixZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzlDLGFBQWE7Z0JBQ2IsWUFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNoRCxhQUFhO2dCQUNiLFlBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNwRCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7WUFDMUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUTtZQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzt1R0E5Q1UsMkJBQTJCOzJGQUEzQiwyQkFBMkIsbVJBQ0MsZ0JBQWdCLDZCQ3hCekQsMjJCQWdCQSxtVERFSSxJQUFJOzsyRkFLSywyQkFBMkI7a0JBVHZDLFNBQVM7K0JBQ0Usc0JBQXNCLGNBQ3BCLElBQUksV0FDUDt3QkFDUCxJQUFJO3FCQUNMOzRHQUt5RCxTQUFTO3NCQUFsRSxTQUFTO3VCQUFDLG1CQUFtQixFQUFFLEVBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFDO2dCQUd4RCxNQUFNO3NCQURMLEtBQUs7Z0JBSU4sUUFBUTtzQkFEUCxLQUFLO2dCQUlOLE9BQU87c0JBRE4sS0FBSztnQkFJTixhQUFhO3NCQURaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGFibGVIZWFkZXJ9IGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvbW9kZWxzL3RhYmxlLWhlYWRlcic7XG5pbXBvcnQge1RhYmxlSW5zdGFuY2V9IGZyb20gJy4uLy4uLy4uL2NvbW1vbnMvZXhwb3J0YWJsZXMvdGFibGUtaW5zdGFuY2UnO1xuaW1wb3J0IHtOZ0lmfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb2dpbnRhYmxlLWRhdGEtY2VsbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBOZ0lmXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9jb2duaXRhYmxlLWRhdGEtY2VsbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9jb2duaXRhYmxlLWRhdGEtY2VsbC5jb21wb25lbnQuY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBDb2duaXRhYmxlRGF0YUNlbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCdjb21wb25lbnRSZW5kZXJlcicsIHtyZWFkOiBWaWV3Q29udGFpbmVyUmVmfSkgY29udGFpbmVyITogVmlld0NvbnRhaW5lclJlZjtcblxuICBASW5wdXQoKVxuICBoZWFkZXI6IFRhYmxlSGVhZGVyIHwgdW5kZWZpbmVkO1xuXG4gIEBJbnB1dCgpXG4gIGNlbGxEYXRhOiBhbnk7XG5cbiAgQElucHV0KClcbiAgcm93RGF0YTogYW55O1xuXG4gIEBJbnB1dCgpXG4gIHRhYmxlSW5zdGFuY2U6IFRhYmxlSW5zdGFuY2UgfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuaGVhZGVyPy5yZW5kZXJlcj8uY29tcG9uZW50TmFtZT8ubGVuZ3RoKSB7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmNvbnRhaW5lciAmJiB0aGlzLmhlYWRlcj8ucmVuZGVyZXI/LmNvbXBvbmVudCkge1xuICAgICAgdGhpcy5jb250YWluZXIuY2xlYXIoKTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudCh0aGlzLmhlYWRlcj8ucmVuZGVyZXI/LmNvbXBvbmVudClcbiAgICAgIGlmIChjb21wb25lbnRSZWY/Lmluc3RhbmNlKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlWydhZGRpdGlvbmFsRGF0YSddID0gdGhpcy5oZWFkZXI/LnJlbmRlcmVyPy5hZGRpdGlvbmFsRGF0YTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2VbJ2hlYWRlciddID0gdGhpcy5oZWFkZXI7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlWydyb3dEYXRhJ10gPSB0aGlzLnJvd0RhdGE7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29tcG9uZW50UmVmLmluc3RhbmNlWydjZWxsRGF0YSddID0gdGhpcy5jZWxsRGF0YTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbGljaygpIHtcbiAgICB0aGlzLnRhYmxlSW5zdGFuY2U/LmNlbGxDb250ZW50Q2xpY2tlZC5lbWl0KHtcbiAgICAgIGhlYWRlcjogdGhpcy5oZWFkZXIsXG4gICAgICBkYXRhOiB0aGlzLmNlbGxEYXRhLFxuICAgICAgcm93RGF0YTogdGhpcy5yb3dEYXRhXG4gICAgfSk7XG4gIH1cbn1cbiIsIjxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O1wiPlxuICA8ZGl2IHN0eWxlPVwid2lkdGg6IDIwcHg7IGhlaWdodDogMTAwJTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cbiAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IDE1cHg7IGhlaWdodDogMTVweDtcIj4mbmJzcDs8L2Rpdj4gPCEtLSBTcGFjZSBmb3IgQ2hlY2tib3gsIE51bWJlcnMsIEV0YyAtLT5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvZ25pdGFibGUtZGF0YS1jZWxsXCIgW3N0eWxlXT1cImhlYWRlcj8uc3R5bGVzPy5jZWxsU3R5bGVzXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvZ25pdGFibGUtZGF0YS1jZWxsLWNvbnRlbnRcIiBbc3R5bGVdPVwiaGVhZGVyPy5zdHlsZXM/LmNlbGxDb250ZW50U3R5bGVzXCIgKGNsaWNrKT1cImNsaWNrKClcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFoZWFkZXI/LnJlbmRlcmVyPy5jb21wb25lbnRcIj57e2NlbGxEYXRhfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhlYWRlcj8ucmVuZGVyZXI/LmNvbXBvbmVudFwiICNjb21wb25lbnRSZW5kZXJlcj48L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBzdHlsZT1cIndpZHRoOiAyMHB4OyBoZWlnaHQ6IDEwMCU7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XG4gICAgPGRpdiBzdHlsZT1cIndpZHRoOiAxNXB4OyBoZWlnaHQ6IDE1cHg7XCI+Jm5ic3A7PC9kaXY+IDwhLS0gU3BhY2UgdG8gc3luYyB3aXRoIHNvcnQgaW4gdGhlIGhlYWRlciwgY2FuIGJlIHVzZWQgZm9yIGFueXRoaW5nIHVzZWZ1bCAtLT5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==