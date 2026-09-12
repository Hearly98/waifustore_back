import { UUID } from "node:crypto";

export class ProductMedia {
  private id: UUID;
  private productId: UUID;
  private url: string;
  private mediaType: string;
  private sortOrder: number;
}
