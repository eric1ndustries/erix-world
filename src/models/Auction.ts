export interface Auction {
  id: string;
  title: string;
  itemId: string;
  minPrice: number;
  userIds: [];
  bidIds: [];
  dateCreated: Date;
  lastUpdated?: Date;
  dateEnded?: Date;
  activeStatus: boolean; // is the auction still going on?
}
