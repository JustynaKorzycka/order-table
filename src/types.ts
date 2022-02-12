export enum PersonStatus{
  ASSIGNED = 'Assigned',
  CONFIRMED = 'Confirmed',
  COMPLETED = 'Completed'
}

export enum OrderStatus{
  NEW = 'New',
  CONFIRMED = 'Confirmed',
  CANCELED = 'Canceled',
  COMPLETED = 'Completed'
}

export enum Priority{
  LOW = 'Low',
  NORMAL = 'Normal',
  HIGH = 'High'
}

export type AssignedPerson = {
  person_name: string;
  status: PersonStatus
}

export type DataTable = {
  work_order_id: number;
  description: string;
  received_date: string;
  assigned_to: AssignedPerson[];
  status: OrderStatus;
  priority: Priority
}
export type LoadingStatus = "pending" | "failed" | "success";

export type DataTableState = {
  data: DataTable[],
  status: LoadingStatus|null
}


