import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Invoice, InvoiceItem } from 'src/app/models/invoice.model';

@Component({
  selector: 'app-view-invoice-details-dialog',
  templateUrl: './view-invoice-details-dialog.component.html',
  styleUrls: ['./view-invoice-details-dialog.component.scss']
})
export class ViewInvoiceDetailsDialogComponent implements OnInit {

  displayedColumns: string[] = [
    'ItemID',
    'ItemLibelle',
    'ItemUnit',
    'ItemQuantity',
    'ItemPrice',
    'ItemTax',
    'TTC',
  ];

  dataSource: MatTableDataSource<InvoiceItem> = new MatTableDataSource<InvoiceItem>([] as InvoiceItem[]);
  printing: boolean = false;
  constructor(
    private dialogRef: DialogRef<ViewInvoiceDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { invoice: Invoice }
  ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data.invoice.InvoiceItems);
  }

  close() {
    this.dialogRef.close();
  }

  print() {
    this.printing = true;
    let printContents = document.getElementById('print-me')?.innerHTML;
    let newWindow = window.open('', '_blank') as any;
    newWindow.document.body.innerHTML = printContents as any;
    newWindow.print();
  }
}
