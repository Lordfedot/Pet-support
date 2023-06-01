export interface INotice {
  _id: string;
  title: string;
  petName: string;
  category: string;
  kind: string;
  breed: string;
  sex: string;
  dateOfBirth: string;
  avatar?: string;
  owner: string;
  place: string;
  price?: string;
}
