import { Invoices } from '@integrationos/node';


export interface InvoiceWithConnection extends Invoices {
    connectionKey: string;
  }
  