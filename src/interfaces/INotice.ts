export interface INotice {
  _id: string;
  title: string;
  category: string;
  petName: string;
  kind: string;
  breed: string;
  sex: string;
  dateOfBirth: string;
  avatar?: string;
  owner: string;
  place: string;
  price?: string;
  commentary: string;
  ownerEmail: string;
  ownerPhone: string;
  isInFavourite: boolean;
}
