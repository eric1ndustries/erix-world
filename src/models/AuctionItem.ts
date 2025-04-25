export interface AuctionItem {
  id: string;
  type?: string; // maybe need to create interface for different type (poster, art)
  size?: string;
  price?: number; // update once auction is won
  ownerId?: string; // keep track of who gets the item ultimately
}
