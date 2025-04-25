// for now, keep data model simple with interface
export interface Bid {
  id: string;
  auctionId: string;
  userId: string;
  value: number;
  dateCreated: Date;
  lastUpdated?: Date; // this is if the user changes their bid
  activeStatus: boolean; // true if bid is still active, false if bid is cancelled or withdrawn
}