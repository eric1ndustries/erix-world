// for now, keep data model simple with interface
export interface User {
  id: string;
  username: string;
  password: string;
  email?: string;
  phoneNumber?: string;
  dateCreated: Date;
  lastUpdated?: Date;
  dateDeleted?: Date;
}
