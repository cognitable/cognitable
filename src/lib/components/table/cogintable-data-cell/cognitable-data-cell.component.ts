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
  @ViewChild('componentRenderer', {read: ViewContainerRef}) container!: ViewContainerRef;

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
    if (this.container && this.header?.renderer?.component) {
      this.container.clear();
      const componentRef = this.container.createComponent(this.header?.renderer?.component)
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
}
