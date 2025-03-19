export interface IFood {
  code: string;
  name: string;
  price: { size: string; price: number | string }[] | number | string;
  category: string;
  description: string;
  material: string;
  images: string[];
  similar: string[];
}
