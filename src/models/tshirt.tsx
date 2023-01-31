export interface TShirt {
  id: number;
  imageURL: string;
  name: string;
  type: string;
  price: number;
  currency: number;
  color: string;
  gender: 'Men' | 'Women',
  quantity: number;
}
