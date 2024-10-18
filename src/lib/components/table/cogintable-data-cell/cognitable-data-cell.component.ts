import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Injector,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {TableHeader} from '../../../commons/models/table-header';
import {TableInstance} from '../../../commons/exportables/table-instance';
import {NgIf} from '@angular/common';
import {CellDataFormatterComponent} from '../../utilities/cell-data-formatter/cell-data-formatter.component';

@Component({
  selector: 'cogintable-data-cell',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './cognitable-data-cell.component.html',
  styleUrl: './cognitable-data-cell.component.css'
})
export class CognitableDataCellComponent implements OnInit, AfterViewInit {
  @ViewChild('componentRenderer', {read: ViewContainerRef}) componentRenderer!: ViewContainerRef;
  @ViewChild('formatterComponent', {read: ViewContainerRef}) formatterComponent!: ViewContainerRef;

  @Input()
  header: TableHeader | undefined;

  @Input()
  cellData: any;

  @Input()
  rowData: any;

  @Input()
  tableInstance: TableInstance | undefined;

  constructor(private injector: Injector, private viewContainerRef: ViewContainerRef) {
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
      const componentRef = this.componentRenderer.createComponent(this.header?.renderer?.component)
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
}
