export class Invoice {
    InvoiceID!: string;
    InvoiceDate!: string;
    ClientName!: string;
    ClientRC!: string;
    ClientAddress!: string;
    ClientPhone!: string;
    ClientBank!: string;
    SupplierName!: string;
    SupplierRC!: string;
    SupplierAddress!: string;
    SupplierPhone!: string;
    SupplierBank!: string;
    InvoiceItems!: InvoiceItem[];
}

export class InvoiceItem {
    ItemID!: string;
    ItemLibelle!: string;
    ItemUnit!: string;
    ItemQuantity!: number;
    ItemPrice!: number;
    ItemTax!: number;
}
