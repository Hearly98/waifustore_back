import { UUID } from "crypto";

export class Supplier {
  private id: UUID;
  private name: string;
  private businessName: string;
  private taxId: string;
  private address: string;
  private phone: string;
  private email: string;
  private isActive: boolean;
  private createdAt: Date;
  private updatedAt: Date;

  constructor(
    id: UUID,
    name: string,
    businessName: string,
    taxId: string,
    address: string,
    phone: string,
    email: string,
  ) {
    this.id = id;
    this.name = name;
    this.businessName = businessName;
    this.taxId = taxId;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.isActive = true; //Is true by default
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getBusinessName(): string {
    return this.businessName;
  }

  setBusinessName(businessName: string): void {
    this.businessName = businessName;
  }

  getTaxId(): string {
    return this.taxId;
  }

  setTaxId(taxId: string): void {
    this.taxId = taxId;
  }

  getAddress(): string {
    return this.address;
  }

  setAddress(address: string): void {
    this.address = address;
  }

  getPhone(): string {
    return this.phone;
  }

  setPhone(phone: string): void {
    this.phone = phone;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getIsActive(): boolean {
    return this.isActive;
  }

  setIsActive(isActive: boolean): void {
    this.isActive = isActive;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  setUpdatedAt(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }
}
