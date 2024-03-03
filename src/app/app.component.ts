import { Component, OnInit } from '@angular/core';
import { Invoice } from './models/invoice.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceService } from './invoice.service';
import { ViewInvoiceDetailsDialogComponent } from './dialogs/view-invoice-details-dialog/view-invoice-details-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = [
    'InvoiceID',
    'InvoiceDate',
    'ClientName',
    'SupplierName',
    'TTC',//this column will ba calculated
    'actions'
  ];

  dataSource: MatTableDataSource<Invoice> = new MatTableDataSource<Invoice>([] as Invoice[]);
  loading: boolean = true;

  constructor(
    private invoiceService: InvoiceService,
    private dialog: MatDialog
  ) { }


  ngOnInit(): void {
    this.invoiceService.getAllStaticData().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res as Invoice[]);
      this.loading = false;
    });
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewDetails(invoice: Invoice) {
    this.dialog.open(ViewInvoiceDetailsDialogComponent, {
      data: {
        invoice,
      },
      maxWidth: '80vw',
      maxHeight: '90vh'
    })
  }
}
