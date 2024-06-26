import { Product } from "../product/Product";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  product?: Product | null;
  quantity: number | null;
  status?: "Option1" | null;
  totalPrice: number | null;
  updatedAt: Date;
  user?: User | null;
};
