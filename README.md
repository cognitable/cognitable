# Cognitable - Angular Datatable

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.3.

## Recommended Platforms to Use
1. Angular >= 18

## Install Cognitable using NPM

```shell
npm install cognitable
```

## Start using Cognitable

### HTML
```html
<cognitable #cognitable
            [tableHeaders]="headers"
            [paginationEnabled]="true"
            (cellContentClicked)="clicked($event)"
></cognitable>
```

### Component Class

#### Get Reference of the Table
Any further operations will be done using this
```typescript
@ViewChild('cognitable') cognitable: CognitableComponent | undefined;
```

#### Declaring Headers
This can be directly given in the HTML attribute

```typescript
headers: TableHeader[] = [
    {
        title: 'Supplier Name',
        field: 'supplierName',
        sort: {
            enabled: true
        },
        styles: {
            cellStyles: {
                color: '#1E40AE',
                cursor: 'pointer'
            }
        }
    },
    {
        title: 'Supplier Type',
        field: 'supplierType'
    },
    {
        title: 'Address',
        field: 'address'
    },
    {
        title: 'Status',
        field: 'status',
        type: 'DROPDOWN',
        renderer: {
            component: StatusDropdownComponent
        }
    }
];
```

#### Set Data to the table

```typescript
this.cognitable?.setTableData(data);
```

#### Search over the whole data in the table

```typescript
this.cognitable?.filter(this.searchText);
```

## REMEMBER
This library is on its birth stage, we will be adding more updates very soon on the go.

You are welcomed to contribute more into it on https://github.com/cognitable/cognitable