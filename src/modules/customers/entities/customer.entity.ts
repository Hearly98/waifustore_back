import { UUID } from "node:crypto";

export class Customer {
  private id: UUID;
  private name: string;
  private email: string;
  private phone: string;
  private address: string;
  private notes: string;
  private active: boolean;
  private createdAt: Date;
  private updatedAt: Date | null;

  constructor(
    id: UUID,
    name: string,
    email: string,
    phone: string,
    address: string,
    notes: string,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.notes = notes;
    this.active = true; //Is true by default
    this.createdAt = new Date();
    this.updatedAt = null;
  }

  getId(): UUID {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  getPhone(): string {
    return this.phone;
  }

  getAddress(): string {
    return this.address;
  }

  getNotes(): string {
    return this.notes;
  }

  isActive(): boolean {
    return this.active;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date | null {
    return this.updatedAt;
  }

  setName(name: string): void {
    this.name = name;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  setPhone(phone: string): void {
    this.phone = phone;
  }

  setAddress(address: string): void {
    this.address = address;
  }

  setNotes(notes: string): void {
    this.notes = notes;
  }

  setActive(active: boolean): void {
    this.active = active;
  }

  setUpdatedAt(updatedAt: Date | null): void {
    this.updatedAt = updatedAt;
  }
}
