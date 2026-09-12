import { UUID } from 'crypto';

export class Product {
  private id: UUID;
  private name: string;
  private description: string;
  private seriesId: UUID;
  private characterId: UUID;
  private manufacturerId: UUID;
  private productTypeId: UUID;
  private productLineId: UUID;
  private sku: string;
  private price: number;
  private isActive: boolean;
  private createdAt: Date;
  private updatedAt: Date;

  constructor(
    id: UUID,
    name: string,
    description: string,
    seriesId: UUID,
    characterId: UUID,
    manufacturerId: UUID,
    productTypeId: UUID,
    productLineId: UUID,
    sku: string,
    price: number,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.seriesId = seriesId;
    this.characterId = characterId;
    this.manufacturerId = manufacturerId;
    this.productTypeId = productTypeId;
    this.productLineId = productLineId;
    this.sku = sku;
    this.price = price;
    this.isActive = true; //Is true by default
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getPrice(): number {
    return this.price;
  }

  getIsActive(): boolean {
    return this.isActive;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  setName(name: string): void {
    this.name = name;
  }

  setDescription(description: string): void {
    this.description = description;
  }

  setPrice(price: number): void {
    this.price = price;
  }

  setIsActive(isActive: boolean): void {
    this.isActive = isActive;
  }

  setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }

  setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }
}
