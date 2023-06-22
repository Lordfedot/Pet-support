export interface NewNotice {
  title: string;
  category: string;
  petName: string;
  breed: string;
  sex: string;
  dateOfBirth: string;
  avatar?: File | undefined | null;
  place: string;
  price: string;
  commentary: string;
}
